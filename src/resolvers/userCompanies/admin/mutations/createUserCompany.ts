import { Company } from "resolvers/companies/types";
import { User } from "resolvers/users/types";
import { UserCompanyArgs } from "resolvers/userCompanies/types";
import { Company as CompanyModel, User as UserModel, UserCompany as UserCompanyModel } from "@mystoreaid/prisma-models";


export default async function createUserCompany (parent: any, args: UserCompanyArgs): Promise<Company> | never {
    const userId: string = args.userId;
    const roleId: string = args.roleId;

    try{
        const existingUser: User = await UserModel.findOne(userId);

        if(existingUser) {
            const data: any = JSON.parse(JSON.stringify(args.companyData));

            data.business_categories = { connect: { id: data.businessCategoryId}};
            data.subscriptions = data.subscriptionId ? { connect : { id: data.subscriptionId }} : undefined;
            data.internal_business_categories = data.internalBusinessCategoryId ? { connect: { id: data.internalBusinessCategoryId}} : undefined
            data.users_companies_lastModifiedByTousers = data.lastModifiedBy ? { connect: { id: data.lastModifiedBy}} : undefined;
            data.users_companies_lastSyncByTousers = data.lastSyncBy ? { connect: { id: data.lastSyncBy}} : undefined;
            data.branches = data.branchIds ? { connect: data.branchIds  } : undefined;
            data.users_branches = data.userBranchIds ? { connect: data.userBranchIds } : data.userBranchIds;

            delete data.businessCategoryId;
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

            const company: Company = await CompanyModel.createOneForeignKey(params);

            if (company) {
                const userdata: any = { 
                    users: { connect: { userId: userId } }, 
                    companies: { connect: { id: company.id } } ,
                    roles: { connect: { id: roleId } }
                }

                const userInclude: any = {
                    users: true,
                    companies: true,
                    roles: true
                }

                const userParams: { data: any, include: any} = { data: userdata, include: userInclude};
                await UserCompanyModel.createOneForeignKey(userParams);
                
            }
            else {
                throw new Error (`There was an error creating Company for user with User ID ${userId}`);
            }
            return company;
        }
        else {
            throw new Error (`There exists no User with User ID ${userId}`);
        }
    }
    catch(error: any){
        throw new Error (`There was an error creating Company for user with User ID ${error}`);
    }
    

    
  
    
}