import { UserBranch as UserBranchModel } from "@mystoreaid/prisma-models";
import e from "express";
import { UserBranch, CustomerCarePersonnelIdArgs } from "resolvers/userBranches/types";
import { Company } from "../../../../resolvers/companies/types";

export default async function customerCarePersonnelCompanies(parent: any, args: CustomerCarePersonnelIdArgs): Promise <Array<Company>> | never {
    const customerCareId: string = args.customerCareId;
    let customerCarePersonnelCompanies: Array<Company> = [];
    const message: string = `Customer Care Personnel with ID ${customerCareId}`;

    try {
        const include: any = {
            companies: {
                branches: true
            }
        }
        const condition: any = { customerCareId: customerCareId};
        const userBranches: Array<UserBranch> = await UserBranchModel.findManyWhereForeignKey(condition, include);
        if(userBranches){
            for (let i = 0; i < userBranches.length; i ++) {
                customerCarePersonnelCompanies.push(userBranches[i].companies);
            }
            return customerCarePersonnelCompanies;
        }
        else {
            throw new Error(`There exist no companies for ${message}`);
        }
    }
    catch(error: any){
        throw new Error(`There was an error finding companies for ${message}`);
    }
}