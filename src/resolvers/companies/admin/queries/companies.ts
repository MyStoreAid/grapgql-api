import { Company } from "../../types";
import CompanyModel from "../../CompanyModel";

export default async function companies (parent: any, args: Company): Promise<Company[]> {
   
    return CompanyModel.findMany();
}