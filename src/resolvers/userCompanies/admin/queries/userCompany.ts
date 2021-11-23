import { UserCompany as UserCompanyModel } from "@mystoreaid/prisma-models";
import { Company } from "resolvers/companies/types";
import { UserCompanyPayload, UserCompany } from "resolvers/userCompanies/types";

export default async function userCompany (parent: any, args: UserCompanyPayload): Promise<Company> | never {
    const companyId: string = args.companyId;
    const userId: string = args.userId;

    try {
        const condition: any = { AND: [ { companyId: companyId }, { userId: userId } ] };
        const include: any = {companies: true}
        const userCompany: UserCompany = await UserCompanyModel.findOneWhereForeignKey(condition, include);

        if (!userCompany) {
            throw new Error(`There exists no company with User ID ${userId} and Company ID ${companyId}`)
        }

        const company: Company = userCompany.companies;
        return company;
    }
    catch(error: any) {
        throw new Error (`There was an error finding Company with user ID ${userId} and company ID ${companyId} `)
    }
}