import { Company } from "../../types";
import { Company as CompanyModel } from "@mystoreaid/prisma-models";

export default async function companies (parent: any, args: Company): Promise<Company[]> {
   
    return CompanyModel.findMany();
}