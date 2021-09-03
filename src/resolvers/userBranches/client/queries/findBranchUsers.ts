import { findBranchUserArgs, UserBranch } from "../../types";
import UserBranchModel from "../../UserBranchModel";


export default async function findBranchUsers (parent: any, args: findBranchUserArgs): Promise<UserBranch[]> {

    const data: {branchId: String, 
        include: {roles: boolean, branches: boolean, users: boolean}} = {
        branchId: args.branchId, 
        include: {
            roles: true,
            branches: true, 
            users: true,
        }
    }
    
    return await UserBranchModel.findManyForeignKey(data);
}