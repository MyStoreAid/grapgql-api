import { ClientCreateCompanyArgs, Company } from '../../types';
import CompanyModel from '../../CompanyModel';
import UserModel from '../../../../resolvers/users/UserModel';
import { Branch } from '../../../../resolvers/branches/types';
import RoleModel from '../../../../resolvers/roles/RoleModel';
import { Role } from '../../../../resolvers/roles/types';
import { CashCustomerContext, CashSupplierContext, CreateBranchContext, CreateCompanyContext, CustomerCareforNewBranchContext } from 'helpers/types';
import CompanyRegistrationHelper from '../../../../helpers/CompanyRegistrationHelper';
import UuidHelper from "../../../../helpers/UuidHelper";
import TimeHelper from "../../../../helpers/TimeHelper";

export default async function createCompany(parent: any, args: ClientCreateCompanyArgs, context: any, info: any): Promise<Company> | never{
    const userId: String = context.userId;
    
    const user = context.user && context.user.userId === userId ? context.user : await UserModel.findOneWhere(context.prisma.users, {userId: userId});
    let newCompany: Company;
    let newBranch: Branch;
    let ownerRole: Role; 
    

    try {
      ownerRole = await RoleModel.findOneWhere(context.prisma.roles, {name: 'owner'}); 
      //   ownerRole.permissions = ownerRole.permissions.map((p) => p.name);
    }
    catch(error: any){
        throw new Error(`Error Finding Owner Role`);
    }
    ;
    if (user && ownerRole) {
        const companyContext: CreateCompanyContext = {companyContext: context.prisma.companies, subscriptionContext: context.prisma.subscriptions};
        const branchContext: CreateBranchContext = { appointmentContext: context.prisma.appointments, branchUserGroupContext: context.prisma.branch_user_groups, branchContext: context.prisma.branches};
        const cashCustomerContext: CashCustomerContext = { customerContext: context.prisma.customers, branchCustomerContext: context.prisma.branches_customers};
        const cashSupplierContext: CashSupplierContext =  { supplierContext: context.prisma.suppliers, branchSupplierContext: context.prisma.branch_suppliers };
        const customerCareforNewBranchContext: CustomerCareforNewBranchContext = { roleContext: context.prisma.roles, userBranchContext: context.prisma.users_branches, userContext: context.prisma.users, userAccessContext: context.prisma.user_access, userCompanyContext: context.prisma.users_companies }
        
        try{
            const data = { 
                data: {
                name: args.company.name,
                business_categories: { connect: { id: args.company.businessCategoryId} },
                subscription: args.company.subscriptionId ? { connect : { id: args.company.subscriptionId }} : undefined,
                email: args.company.email,
                phone: args.company.phone,
                internalBusinessCategory: args.company.internalBusinessCategoryId ? { connect: { id: args.company.internalBusinessCategoryId}} : undefined,
                adminLastModifiedBy: args.company.adminLastModifiedBy,
                lastModifiedBy: args.company.lastModifiedBy ? { connect: { id: args.company.lastModifiedBy}} : undefined,
                lastSyncBy: args.company.lastSyncBy ? { connect: { id: args.company.lastSyncBy}} : undefined},
        
                include: {
                    business_categories: true,
                    subscriptions: true,
                    internal_business_categories: true,
                    
        
                }   
            }
            newCompany = await CompanyRegistrationHelper.createAndUpdateCompany(companyContext, data , ownerRole);
        }
        catch(error:any){
            throw new Error(`There was an error creating Company. Error Message: ${error}`);
        }

        try{
            let branchUsers: [{ branchId: String, userId: String}] | any = [];
            const currentTime: number = TimeHelper.currentTime;
            if (args.branch.branchUserIds.length > 0) {
                for (let id of args.branch.branchUserIds) {
                    branchUsers.push({ 
                        id: UuidHelper.newUuid,
                        roleId: ownerRole.id,
                        userId: id,
                        companyId: newCompany.id,
                        created_at: currentTime,
                        updated_at: currentTime,
                        server_created_at: currentTime,
                        last_modified: currentTime,
                    });
                }
            }
            const branchData: any = {
                data: {
                   
                    name: args.branch.name,
                    startDate: args.branch.startDate,
                    address: args.branch.address,
                    location: args.branch.location,
                    logo: args.branch.logo,
                    phone: args.branch.phone,
                    whatsAppPhone: args.branch.whatsAppPhone,
                    type: args.branch.type,
                    action: args.branch.action,
                    syncInterval: args.branch.syncInterval,
                    gps: args.branch.gps,
                    latitude: args.branch.latitude,
                    longitude: args.branch.longitude,
                    country: args.branch.country,
                    region: args.branch.region,
                    city: args.branch.city,
                    workingDays: args.branch.workingDays,
                    sourcesOfPurchases: args.branch.sourcesOfPurchases,
                    phoneType: args.branch.phoneType,
                    otherServices: args.branch.otherServices,
                    locationType: args.branch.locationType,
                    storeImage: args.branch.storeImage,
                    serviceType: args.branch.serviceType,
                    buildingStructure:args.branch.buildingStructure,
                    coolerBrands: args.branch.coolerBrands,
                    coolerTypes: args.branch.coolerTypes,
                    electricity: args.branch.electricity,
                    yearOfEstablishment: args.branch.yearOfEstablishment,
                    appointments: args.branch.appointmentId ? { connect : {id: args.branch.appointmentId}} : undefined ,
                    branch_user_groups: args.branch.branchUserGroupId ? { connect: { id: args.branch.branchUserGroupId } } : undefined,
                    business_categories: args.branch.businessCategoryId ? { connect: { id: args.branch.businessCategoryId } } : undefined,
                    companies: args.branch.companyId ? { connect: { id: args.branch.companyId } } : undefined,
                    users_branches: args.branch.branchUserIds.length > 0 ? { createMany : { data: branchUsers } } : undefined,
                    
                },
        
                include: {
                    appointments: true,
                    branch_user_groups: true,
                    business_categories: true,
                    companies: true,
                    users_branches: true,
                }
            }
            newBranch = await CompanyRegistrationHelper.createAndUpdateBranch(branchContext, branchData , newCompany.id, ownerRole);
        }
        catch(error: any) {
            throw new Error(`There was an error creating Branch: Error Message: ${error}`)
        }
        newCompany.branch = [newBranch];
    
        await Promise.all([
            CompanyRegistrationHelper.setCashCustomer( cashCustomerContext, newBranch.id),
            CompanyRegistrationHelper.setCashSupplier( cashSupplierContext, newBranch.id, user.userId),
            CompanyRegistrationHelper.assignUserToCompany(context.prisma.users_companies, user.userId, newCompany.id, ownerRole.id),
            CompanyRegistrationHelper.assignUserToBranch(context.prisma.users_branches, user.userId, newCompany.id, newBranch.id, ownerRole.id),
        ]);
        if (Array.isArray(args.goalIds) && args.goalIds.length > 0) {
            await CompanyRegistrationHelper.setBranchGoals( context.prisma.branches_branch_goals, newBranch.id, []);
        }

        if (user && newCompany && newBranch) {
            
            const result = {
                user,
                companies: [newCompany],
            };
           console.log("almost there");
            
            if (args.customerCareId && args.customerCareId.length > 10) {
                const customerCareId = args.customerCareId;
                await CompanyRegistrationHelper.assignCustomerCareForNewBranch( customerCareforNewBranchContext,customerCareId, newCompany.id, newBranch.id, args.callerInstance);
            }
            
            else {
                throw new Error('An error was encountered during company registration')
            }    
        }
        return newCompany;
    }
    throw new Error(`Could not create company `);     
}
    
    


      

    
 