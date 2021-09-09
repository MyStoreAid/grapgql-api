import { Company, CompanyIdArgs } from "../../types";
import { Company as CompanyModel } from "@mystoreaid/prisma-models";

export default async function company (parent: any, args: CompanyIdArgs): Promise<Company> | never {
    let result! : Company;
    const companyId: string = args.id;

    try {
        result = await CompanyModel.findOne(companyId)
    } catch (error: unknown) {
        throw new Error(`There was an error getting business category with ID ${companyId}.`);
    }

    if (!result) {
        throw new Error(`There is no business category with ID ${companyId}.`);
    }


    return result;

}