import { ClientCreateCompanyArgs, ClientCreateCompanyResponse, Company } from '../../types';
import {  
    User  as UserModel,
    Role as RoleModel } from "@mystoreaid/prisma-models";
import { Branch } from '../../../../resolvers/branches/types';
import { Role } from '../../../../resolvers/roles/types';
import CompanyRegistrationHelper from '../../../../helpers/CompanyRegistrationHelper';
import UuidHelper from "../../../../helpers/UuidHelper";
import TimeHelper from "../../../../helpers/TimeHelper";
import { User } from 'resolvers/users/types';

export default async function createCompany(parent: any, args: ClientCreateCompanyArgs, context: any, info: any): Promise<ClientCreateCompanyResponse> | never{
    const userId: String = context.userId;
    
    const user: User = context.user && context.user.userId === userId ? context.user : await UserModel.findOneWhere({userId: userId});
    let newCompany: Company;
    let newBranch: Branch;
    let ownerRole: Role; 
   

    try {
      ownerRole = await RoleModel.findOneWhere({name: 'owner'}); 
      //   ownerRole.permissions = ownerRole.permissions.map((p) => p.name);
    }
    catch(error: any){
        throw new Error(`Error Finding Owner Role`);
    }
    ;
    if (user && ownerRole) {
      
        
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
            newCompany = await CompanyRegistrationHelper.createAndUpdateCompany(data , ownerRole);
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
            newBranch = await CompanyRegistrationHelper.createAndUpdateBranch(branchData , newCompany.id, ownerRole);
        }
        catch(error: any) {
            throw new Error(`There was an error creating Branch: Error Message: ${error}`)
        }
        newCompany.branches = [newBranch];
    
        await Promise.all([
            CompanyRegistrationHelper.setCashCustomer(  newBranch.id),
            CompanyRegistrationHelper.setCashSupplier( newBranch.id, user.userId),
            CompanyRegistrationHelper.assignUserToCompany( user.userId, newCompany.id, ownerRole.id),
            CompanyRegistrationHelper.assignUserToBranch( user.userId, newCompany.id, newBranch.id, ownerRole.id),
        ]);
        if (Array.isArray(args.goalIds) && args.goalIds.length > 0) {
            await CompanyRegistrationHelper.setBranchGoals( newBranch.id, []);
        }

        if (user && newCompany && newBranch) {
           
            const result = {
                user: user,
                companies: [newCompany],
            };
           
            
            if (args.customerCareId && args.customerCareId.length > 10) {
                const customerCareId = args.customerCareId;
                await CompanyRegistrationHelper.assignCustomerCareForNewBranch( customerCareId, newCompany.id, newBranch.id);
            }
            
            else {
                throw new Error('An error was encountered during company registration')
            }
            
            return result;
        }
        throw new Error('An error was encountered during company registration');
        
    }
    throw new Error(`Could not create company `);     
}
    
    


      

    
 