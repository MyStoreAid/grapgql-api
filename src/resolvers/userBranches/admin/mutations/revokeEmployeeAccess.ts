import { UserBranch as UserBranchModel, Branch as BranchModel } from "@mystoreaid/prisma-models";
import { UserBranch, DeleteBranchArgs } from "../../types";
import { Branch } from "../../../branches/types";

export default async function revokeEmployeeAccess (parent: any, args: DeleteBranchArgs ): Promise<Array<UserBranch>> | never {
    const userId: string = args.userId;
    const companyId: string = args.companyId;
    const branchId: string = args.branchId;
    let existingUserBranches: Array<UserBranch> = [];

    try{
        const condition: any = { AND: [{ userId: userId }, { companyId: companyId } , { branchId: branchId } ] };
        existingUserBranches = await UserBranchModel.deleteManyWhere(condition);
        return existingUserBranches;   
    }
    catch(error: any){
        throw new Error (`There was an error updating Branch with User ID ${userId}, Company ID ${companyId} and Branch ID ${branchId}`)
    }
}