import moment from "moment";
import AppointmentModel from "../resolvers/appointments/AppointmentModel";
import BranchModel from "../resolvers/branches/BranchModel";
import BranchBranchGoalModel from "../resolvers/branchesBranchGoals/BranchBranchGoal";
import BranchCustomerModel from "../resolvers/branchesCustomers/BranchCustomerModel";
import BranchProductCategoryModel from "../resolvers/branchProductCategories/BranchProductCategoryModel";
import BranchSupplierModel from "../resolvers/branchSuppliers/BranchSupplierModel";
import BranchUserGroupModel from "../resolvers/branchUserGroups/BranchUserGroupModel";
import CompanyModel from "../resolvers/companies/CompanyModel";
import CustomerModel from "../resolvers/customers/CustomerModel";
import RoleModel from "../resolvers/roles/RoleModel";
import SupplierModel from "../resolvers/suppliers/SupplierModel";
import UserModel from "../resolvers/users/UserModel";
import UserAccess from "../models/UserAccess";
import UserBranchModel from "../resolvers/userBranches/UserBranchModel";
import UserCompanyModel from "../resolvers/userCompanies/UserCompany";
import IpLocator from "../services/IpLocator";
import addressInfoFromGps from "./AddressInfoFromGPS";
import { generateHash } from "../resolvers/users/helpers";
import UuidHelper from "./UuidHelper";
import { PrismaModelContext } from "types/prisma";
import { Branch, BranchId } from "resolvers/branches/types";
import { Customer } from "resolvers/customers/types";
import { logger } from "../../config/logger";
import { UserId, User, RegisterUserPayload } from "resolvers/users/types";
import { Company, CompanyId } from "resolvers/companies/types";
import { Role, RoleId } from "resolvers/roles/types";
import { Subscription } from "resolvers/subscriptions/types";
import { UserBranch } from "resolvers/userBranches/types";
import { CashCustomerContext, CashSupplierContext, CreateBranchContext, CreateCompanyContext, CustomerCareforNewBranchContext } from "./types";

export default class CompanyRegistrationHelper {
    static async setCashCustomer(cashCustomerContext: CashCustomerContext, branchId: BranchId) {
        let cashCustomer: Customer 
        try{
          cashCustomer = await CustomerModel.findOneWhere(cashCustomerContext.customerContext , {AND :
            [{firstName: 'Cash'}, {otherNames: 'Customer'}]
          });
          
        }
        catch(error: any) {
          throw new Error(`Error Finding Customer with name Cash Customer. Error Message ${error}`);
        }
          
        if (cashCustomer) {
          const data: { data: any, include: any} = {
            data: {
              branches: { connect: { id: branchId}},
              customers: { connect: { id: cashCustomer.id}}
            },
            include: {
              branches: true,
              customers: true,
            }
          }
          return await BranchCustomerModel.createOneForeignKey(cashCustomerContext.branchCustomerContext , data);
        } else {
          throw new Error(`There exists no Customer with name Cash Customer. `)
        }
    }

    static async setCashSupplier(cashSupplierContext: CashSupplierContext, branchId: BranchId, userId: UserId) {
        
        let cashSupplier;
        try{
        cashSupplier = await SupplierModel.findOneWhere(cashSupplierContext.supplierContext, { name: 'Cash Supplier' });
        }
        catch(error: any){
          throw new Error(`There was an error finding Cash Supplier with name Cash Supplier. Error Message ${error}`)
        }

        if (cashSupplier) {
          
          await BranchSupplierModel.createOneForeignKey( cashSupplierContext.branchSupplierContext , {
            data: {
              branches: { connect: { id: branchId}},
              supplierId: cashSupplier.id,
              branchName: cashSupplier.name,
              branchContact: cashSupplier.phone,
              dateAdded: moment().unix(),
              deliveryDays: SupplierModel._allDeliveryDays,
              users_branch_suppliers_createdByTousers: { connect: { userId: userId} }
            },
            include: {
              branches: true,
              users_branch_suppliers_createdByTousers: true
            }
          });
          
        } else {
          throw new Error(`Could not associate Cash customer to branch ${branchId}`);
        }
    }

    static async assignUserToCompany( userCompanyContext: PrismaModelContext, userId: UserId, companyId: CompanyId, roleId: RoleId) {
        console.log("here")
        await UserCompanyModel.createOneForeignKey( userCompanyContext ,{
          data: { 
            users: { connect: {userId: userId } }, 
            companies: { connect: { id: companyId } }, 
            roles: { connect: { id: roleId } }
          },
          include: {
            users: true,
            roles: true,
            companies: true,
          }
        });
        console.log("done")
    }

    static async assignUserToBranch( userBranchContext: PrismaModelContext, userId: UserId, companyId: CompanyId, branchId: BranchId, roleId: RoleId, main: boolean = false): Promise<UserBranch> {
        return UserBranchModel.createOneForeignKey( userBranchContext, { 
          data: {
            users: { connect: { userId: userId } }, 
            companies: { connect: { id: companyId } }, 
            branches: { connect: { id: branchId } }, 
            roles: { connect: { id: roleId } }, 
            main },
          include: {
            users: true,
            companies: true,
            branches: true,
            roles: true,
          }
          });
    }

    static async createAndUpdateCompany(createCompanyContext: CreateCompanyContext,  companyParams: any, ownerRole: Role): Promise<Company> {
        let subscription: Subscription;  
        if (!companyParams.data.subscriptions) {
         subscription  = await CompanyModel.defaultSubscription(createCompanyContext.subscriptionContext);
         companyParams.data.subscriptions = { connect: { id: subscription.id }};
        }

        const newCompany: Company = await CompanyModel.createOneForeignKey(createCompanyContext.companyContext, companyParams);
        // newCompany.role = ownerRole.name;
        // newCompany.permissions = ownerRole.permissions;
        if (!newCompany.subscriptionId) {
          subscription  = await CompanyModel.defaultSubscription(createCompanyContext.subscriptionContext);
          newCompany.subscriptionId = await CompanyModel.updateOneForeignKey(createCompanyContext.companyContext, newCompany.id, { 
            data: {
              subscriptions: { connect: { id: subscription.id}}
            },
            include: {
              subscriptions: true,
            }
          });
          // newCompany.subscription.features = newCompany.subscription.features.map((f) => f.name);
        }

        return newCompany;
    }

    static async createAndUpdateBranch( createBranchContext: CreateBranchContext, newBranchParams: any, companyId: CompanyId, ownerRole: Role): Promise<Branch> {
        const branchParams: any = newBranchParams;
        branchParams.companyId = companyId;
        
        if (!branchParams.branchUserGroupId) {
          const defaultBranchUserGroup = await BranchUserGroupModel.getDefault(createBranchContext.branchUserGroupContext);
          if (defaultBranchUserGroup) {
            branchParams.data.branchUserGroupId = defaultBranchUserGroup.id;
          }
        }
        
        branchParams.data.type = branchParams.data.type.toLowerCase();
        if (branchParams.data.gps && branchParams.data.gps.lat && branchParams.data.gps.lng) {
          branchParams.data.longitude = branchParams.data.gps.lng;
          branchParams.data.latitude = branchParams.data.gps.lat;
        }
        branchParams.data.id = UuidHelper.newUuid;
        const newBranch = await BranchModel.createOneForeignKey(createBranchContext.branchContext, branchParams);
        // newBranch.role = ownerRole.name;
        // newBranch.permissions = ownerRole.permissions;

        if (branchParams.data.appointmentId && branchParams.data.appointmentId.length !== 0) {
          await AppointmentModel.updateOneForeignKey(createBranchContext.appointmentContext, branchParams.appointmentId, { 
            data:{
              branches: { connect: { id: newBranch.id }  }
            },
            include: {
              branches: true
            }
            });
        }

        return newBranch;
    }

    static async assignCustomerCareForNewBranch(CustomerCareContext: CustomerCareforNewBranchContext,customerCareId: UserId, companyId: CompanyId, branchId: BranchId, callerInstance: any) {
        const customerCareUser: User = await UserModel.findOneWhere( CustomerCareContext.userContext, {userId: customerCareId});
        const customerCareRole: Role = await RoleModel.findOneWhere( CustomerCareContext.roleContext, {name: 'customer care'});

        if (customerCareId && customerCareUser && customerCareRole) {
          await this.assignUserToCompany(CustomerCareContext.userCompanyContext, customerCareId, companyId, customerCareRole.id);
          await this.assignUserToBranch(CustomerCareContext.userBranchContext, customerCareId, companyId, branchId, customerCareRole.id, true);
          console.log("here Inside");
          await UserAccess.deleteOne( CustomerCareContext.userAccessContext,  customerCareId)
          console.log("after inside");
          return callerInstance.userAccess(customerCareUser, [companyId]);
        }
    }

    static async setNewBranchLocationInfo(branch: Branch, req: any) {
        if (!branch.gps || (!branch.gps.lat || !branch.gps.lng)) {
          const anIp =
            (typeof req.headers['x-forwarded-for'] === 'string' &&
              req.headers['x-forwarded-for'].split(',').shift()) ||
            req.connection?.remoteAddress ||
            req.socket?.remoteAddress ||
            req.connection?.socket?.remoteAddress;

          if (anIp) {
            const ipInfo = IpLocator.ipInfo(anIp);
            if (ipInfo) {
              branch.city = ipInfo.city;
              if (ipInfo.country === 'GH') {
                branch.country = 'Ghana';
              }
              if (Array.isArray(ipInfo.ll)) {
                branch.gps = {
                  lat: ipInfo.ll[0],
                  lng: ipInfo.ll[1],
                };
              }
            }
          }
        } else if (branch.gps && (!branch.country || !branch.city || !branch.region)) {
          const locationParamsFromGPS = await addressInfoFromGps(branch.gps);
          Object.assign(branch, locationParamsFromGPS);
        }
    }

    static async createNewBranchOwner(userContext: PrismaModelContext, userParams: RegisterUserPayload) {
        if(userParams.password){
          userParams.password = await generateHash(userParams.password);
        }
        userParams.userId = UuidHelper.newUuid;
        userParams.status = 'unconfirmed';
        return UserModel.createOne( userContext, userParams );
    }

    static async setBranchProductCategories( branchProductCategoryContext: PrismaModelContext, branchParams: Branch, branchId: BranchId) {
        if (branchParams.branchProductCategoryIds && branchParams.branchProductCategoryIds.length > 0) {
          const branchProductCategoryIds = branchParams.branchProductCategoryIds;
          const branchProductCategoriesParams = branchProductCategoryIds.map((pcId) => ({
            id: UuidHelper.newUuid,
            branchId,
            productCategoryId: pcId,
          }));

          await BranchProductCategoryModel.createMany( branchProductCategoryContext, branchProductCategoriesParams);
        }
    }

    static async setBranchGoals( BranchBranchGoalContext: PrismaModelContext, branchId: BranchId, goalIds = []) {
        const allBranchGoalParams = [];
        for (const goalId of goalIds) {
          allBranchGoalParams.push({
            branchId,
            branchGoalId: goalId
          });
        }
        if (allBranchGoalParams.length > 0) {
          await BranchBranchGoalModel.createMany( BranchBranchGoalContext,allBranchGoalParams);
        }
    }
}

