import { UserBranch as UserBranchModel } from "@mystoreaid/prisma-models";
import { UserBranch, DeleteBranchArgs } from "../../../../resolvers/userBranches/types";
import { Branch } from "../../../../resolvers/branches/types";

export default async function userBranch (parent: any, args: DeleteBranchArgs ): Promise<Branch> | never {
    const userId: string = args.userId;
    const companyId: string = args.companyId;
    const branchId: string = args.branchId;

    try{
        const condition: any = { AND: [{ userId: userId }, { companyId: companyId } , { branchId: branchId } ] };
        const include: any = { branches: true };
        const existingUserBranch: UserBranch = await UserBranchModel.findOneWhereForeignKey(condition, include);

        if (existingUserBranch){
            const branch: Branch = existingUserBranch.branches;
            return branch;
        }
        else {
            throw new Error (`There exists no Branch with User ID ${userId}, Company ID ${companyId} and Branch ID ${branchId}`);
        }
    }
    catch(error: any){
        throw new Error (`There was an error finding Branch with User ID ${userId}, Company ID ${companyId} and Branch ID ${branchId}`)
    }
}