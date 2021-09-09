import { Company, CompanyIdArgs } from "../../types";
import { Company as CompanyModel } from "@mystoreaid/prisma-models";
import { Branch } from "../../../../resolvers/branches/types";

export default async function companyBranches (parent: any, args: CompanyIdArgs): Promise<Branch[]>  | never{

    let existingCompany: Company;
    const companyId: string = args.id;
    let branches: Array<Branch> = [];

    try{
        existingCompany = await CompanyModel.findOneForeignKey(companyId, { branches: true });
    }
    catch(error: any) {
        throw new Error(`There was an error finding Company with ID ${companyId}`)
    }

    if(existingCompany) {
        branches = existingCompany.branches
        return branches;
    }

    throw new Error(`There exists no company with ID ${companyId}`);
}