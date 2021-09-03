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
import { Branch, BranchId } from "resolvers/branches/types";
import { Customer } from "resolvers/customers/types";
import { logger } from "../../config/logger";
import { UserId, User, RegisterUserPayload } from "resolvers/users/types";
import { Company, CompanyId } from "resolvers/companies/types";
import { Role, RoleId } from "resolvers/roles/types";
import { Subscription } from "resolvers/subscriptions/types";
import { UserBranch } from "resolvers/userBranches/types";
import UserAccessService from "services/UserAccessService";

export default class CompanyRegistrationHelper {
    static async setCashCustomer(branchId: BranchId) {
        let cashCustomer: Customer 
        try{
          cashCustomer = await CustomerModel.findOneWhere({AND :
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
          return await BranchCustomerModel.createOneForeignKey(data);
        } else {
          throw new Error(`There exists no Customer with name Cash Customer. `)
        }
    }

    static async setCashSupplier(branchId: BranchId, userId: UserId) {
        
        let cashSupplier;
        try{
        cashSupplier = await SupplierModel.findOneWhere({ name: 'Cash Supplier' });
        }
        catch(error: any){
          throw new Error(`There was an error finding Cash Supplier with name Cash Supplier. Error Message ${error}`)
        }

        if (cashSupplier) {
          
          await BranchSupplierModel.createOneForeignKey({
            data: {
              branches: { connect: { id: branchId}},
              supplierId: cashSupplier.id,
              branchName: cashSupplier.name,
              branchContact: cashSupplier.phone,
              dateAdded: moment().unix(),
              deliveryDays: JSON.stringify(SupplierModel._allDeliveryDays),
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

    static async assignUserToCompany(userId: UserId, companyId: CompanyId, roleId: RoleId) {
        
        await UserCompanyModel.createOneForeignKey({
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

    static async assignUserToBranch(userId: UserId, companyId: CompanyId, branchId: BranchId, roleId: RoleId, main: boolean = false): Promise<UserBranch> {
        return UserBranchModel.createOneForeignKey({ 
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

    static async createAndUpdateCompany(companyParams: any, ownerRole: Role): Promise<Company> {
        let subscription: Subscription;  
        if (!companyParams.data.subscriptions) {
         subscription  = await CompanyModel.defaultSubscription();
         companyParams.data.subscriptions = { connect: { id: subscription.id }};
        }

        const newCompany: Company = await CompanyModel.createOneForeignKey(companyParams);
        // newCompany.role = ownerRole.name;
        // newCompany.permissions = ownerRole.permissions;
        if (!newCompany.subscriptionId) {
          subscription  = await CompanyModel.defaultSubscription();
          newCompany.subscriptionId = await CompanyModel.updateOneForeignKey(newCompany.id, { 
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

    static async createAndUpdateBranch(newBranchParams: any, companyId: CompanyId, ownerRole: Role): Promise<Branch> {
        const branchParams: any = newBranchParams;
        branchParams.companyId = companyId;
        
        if (!branchParams.branchUserGroupId) {
          const defaultBranchUserGroup = await BranchUserGroupModel.getDefault();
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
        const newBranch = await BranchModel.createOneForeignKey(branchParams);
        // newBranch.role = ownerRole.name;
        // newBranch.permissions = ownerRole.permissions;

        if (branchParams.data.appointmentId && branchParams.data.appointmentId.length !== 0) {
          await AppointmentModel.updateOneForeignKey(branchParams.appointmentId, { 
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

    static async assignCustomerCareForNewBranch(customerCareId: UserId, companyId: CompanyId, branchId: BranchId) {
        const customerCareUser: User = await UserModel.findOneWhere({userId: customerCareId});
        const customerCareRole: Role = await RoleModel.findOneWhere({name: 'customer care'});

        if (customerCareId && customerCareUser && customerCareRole) {
          await this.assignUserToCompany(customerCareId, companyId, customerCareRole.id);
          await this.assignUserToBranch(customerCareId, companyId, branchId, customerCareRole.id, true);
          await UserAccess.deleteOne(customerCareId)
          return UserAccessService.getUserAccess(customerCareUser, [companyId]);
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

    static async createNewBranchOwner(userParams: RegisterUserPayload) {
        if(userParams.password){
          userParams.password = await generateHash(userParams.password);
        }
        userParams.userId = UuidHelper.newUuid;
        userParams.status = 'unconfirmed';
        return UserModel.createOne(userParams);
    }

    static async setBranchProductCategories(branchParams: Branch, branchId: BranchId) {
        if (branchParams.branchProductCategoryIds && branchParams.branchProductCategoryIds.length > 0) {
          const branchProductCategoryIds = branchParams.branchProductCategoryIds;
          const branchProductCategoriesParams = branchProductCategoryIds.map((pcId) => ({
            id: UuidHelper.newUuid,
            branchId,
            productCategoryId: pcId,
          }));

          await BranchProductCategoryModel.createMany(branchProductCategoriesParams);
        }
    }

    static async setBranchGoals(branchId: BranchId, goalIds = []) {
        const allBranchGoalParams = [];
        for (const goalId of goalIds) {
          allBranchGoalParams.push({
            branchId,
            branchGoalId: goalId
          });
        }
        if (allBranchGoalParams.length > 0) {
          await BranchBranchGoalModel.createMany(allBranchGoalParams);
        }
    }
}

