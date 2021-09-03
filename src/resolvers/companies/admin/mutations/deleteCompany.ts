import { Company,CompanyIdArgs } from "../../types";
import CompanyModel from "../../CompanyModel";



export default async function deleteCompany (parent: any, args: CompanyIdArgs): Promise<Company> | never {
    let existingCompany!: Company;
    const companyId: string = args.id;

    try {
        existingCompany = await CompanyModel.findOne(companyId)
    } catch (error: unknown) {
        console.error(error);
        throw new Error(`There is an error fetching a business category with ID ${companyId}`);
    }

    if(!existingCompany) {
        throw new Error(`There is no business category with ID ${companyId}`);
    }

    return await CompanyModel.deleteOne(companyId)
}