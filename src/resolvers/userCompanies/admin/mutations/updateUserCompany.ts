import { Company } from "resolvers/companies/types";

import { UpdateUserCompanyPayload, UserCompany } from "resolvers/userCompanies/types";
import { Company as CompanyModel, User as UserModel, UserCompany as UserCompanyModel } from "@mystoreaid/prisma-models";


export default async function updateUserCompany (parent: any, args: UpdateUserCompanyPayload): Promise<Company> | never {
    const userId: string = args.userId;
    const companyId: string = args.companyId

    try{
        const condition: any = { AND: [ { userId: userId }, { companyId: companyId } ] };

        const existingUserCompany: UserCompany = await UserCompanyModel.findOneWhere(condition);

        if(existingUserCompany) {
            const data: any = JSON.parse(JSON.stringify(args.companyData));
            
            data.subscriptions = data.subscriptionId ? { connect : { id: data.subscriptionId }} : undefined;
            data.internal_business_categories = data.internalBusinessCategoryId ? { connect: { id: data.internalBusinessCategoryId}} : undefined
            data.users_companies_lastModifiedByTousers = data.lastModifiedBy ? { connect: { id: data.lastModifiedBy}} : undefined;
            data.users_companies_lastSyncByTousers = data.lastSyncBy ? { connect: { id: data.lastSyncBy}} : undefined;
            data.branches = data.branchIds ? { connect: data.branchIds  } : undefined;
            data.users_branches = data.userBranchIds ? { connect: data.userBranchIds } : data.userBranchIds;

            delete data.id;
            delete data.subscriptionId;
            delete data.internalBusinessCategoryId;
            delete data.lastModifiedBy ;
            delete data.lastSyncBy;
            delete data.branchIds;
            delete data.userBranchIds;


            const include: any = {
                business_categories: true,
                subscriptions: true,
                internal_business_categories: true,
                users_companies_lastModifiedByTousers: true,
                users_companies_lastSyncByTousers: true,
                users_branches: true
            }

            const params: {data: any, include: any} = {data: data, include: include};

            const company: Company = await CompanyModel.updateOneForeignKey(companyId, params);
            return company;
        }
        else {
            throw new Error (`There exists no User with User ID ${userId} or Company ID ${companyId}`);
        }
    }
    catch(error: any){
        throw new Error (`There was an error updating Company for user with User ID ${userId} and Company ID ${companyId}`);
    }
    

    
  
    
}