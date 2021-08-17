import { Company } from "../types";
import CompanyModel from "../CompanyModel";

export default async function companies (parent: any, args: Company, context: any) {
    return await context.prisma.companies.findMany();
    return CompanyModel.findMany(context.prisma.companies);
}