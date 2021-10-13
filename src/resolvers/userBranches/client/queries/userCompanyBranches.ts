import { Branch } from "../../../../resolvers/branches/types";
import { CompanyId } from "../../../../resolvers/companies/types";
import { UserBranch, UserCompanyBranchArgs } from "../../../../resolvers/userBranches/types";
import { UserBranch as UserBranchModel} from "@mystoreaid/prisma-models";
import { UserId } from "../../../../resolvers/users/types";


export default async function userCompanyBranches(parent: any, args: UserCompanyBranchArgs): Promise<Branch[]> {

    let existingUserBranches: Array<UserBranch> = []
    let companyBranches: Array<Branch> = []
    let companyId: CompanyId = args.companyId;
    let userId: UserId = args.userId;

    try{
        existingUserBranches = await UserBranchModel.findManyWhereForeignKey({ AND: 
            [ { userId: userId }, { companyId: companyId } ] }, { branches: true });
    }
    catch (error: any) {
        throw new Error(`There was an error finding User Branches with User ID ${userId} and Company ID ${companyId}`);
    }

    if(existingUserBranches) {
        for (let existingUserBranch of existingUserBranches) {
            companyBranches.push(existingUserBranch.branches);
        }

        return companyBranches;
    }

    throw new Error(`There exist no User Branches with User ID ${userId} and Company ID ${companyId}`);
    

}