import {
    Branch as BranchModel,
    UserBranch as UserBranchModel} from "@mystoreaid/prisma-models";
import { Branch } from "../../../../resolvers/branches/types";
import { DeleteBranchArgs, UserBranch } from "../../../../resolvers/userBranches/types";

export default async function deleteBranch (parent: any, args: DeleteBranchArgs): Promise<Branch> | never {
    
    let branchId: string = args.branchId;
    let userId: string = args.userId;
    let companyId: string = args. companyId;

    let deletedBranch: Branch;
    let existingBranch: Branch;
    let existingUserBranch: UserBranch;
    let errorMessage: string = `with User ID ${userId}, Branch ID ${branchId} and Company ID ${companyId}`;

    try{
        existingUserBranch = await UserBranchModel.findOneWhere({ AND: [ { branchId: branchId }, { userId: userId }, { companyId: companyId } ] });
    }
    catch(error: any) {
        throw new Error(`There was an error finding UserBranch ${errorMessage}`)
    }

    try {
        existingBranch = await BranchModel.findOne(branchId);
    }
    catch(error: any) {
        throw new Error(`There was an error finding Branch with Branch ID ${branchId}`);
    }

    if (existingUserBranch) {
        try{
            deletedBranch = await BranchModel.deleteOne(branchId);
        }
        catch(error: any){
            throw new Error(`There was an error deleting Branch with ID ${branchId}`);
        }
        try {
            await UserBranchModel.deleteOneWhere({branchId: deletedBranch.id});
        }
        catch(error:any) {
            throw new Error(`There was an error deleting User Branch ${errorMessage} ${error}`);
        }

        return deletedBranch
    }

    throw new Error(`There exists no User Branch ${errorMessage}`)

    
    
}