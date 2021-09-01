import { Company } from "../../types";
import CompanyModel from "../../CompanyModel";

export default async function companies (parent: any, args: Company, context: any): Promise<Company[]> {
   
    return CompanyModel.findMany(context.prisma.companies);
}