import { Company } from "resolvers/companies/types";

import { UserCompanyPayload, UserCompany } from "resolvers/userCompanies/types";
import { Company as CompanyModel, User as UserModel, UserCompany as UserCompanyModel } from "@mystoreaid/prisma-models";


export default async function deleteUserCompany (parent: any, args: UserCompanyPayload): Promise<Company> | never {
    const userId: string = args.userId;
    const companyId: string = args.companyId

    try{
        const condition: any = { AND: [ { userId: userId }, { companyId: companyId } ] };

        const existingUserCompany: UserCompany = await UserCompanyModel.findOneWhere(condition);

        if(existingUserCompany) {
            const include: any = {
                business_categories: true,
                subscriptions: true,
                internal_business_categories: true,
                users_companies_lastModifiedByTousers: true,
                users_companies_lastSyncByTousers: true,
                users_branches: true
            }   

            const company: Company = await CompanyModel.deleteOneForeignKey(companyId, include);
            await UserCompanyModel.deleteOne(existingUserCompany.id);
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