import { findBranchUserArgs, UserBranch } from "../types";
import UserBranchModel from "../UserBranchModel";


export default async function productSegmentEntries (parent: any, args: findBranchUserArgs, context: any): Promise<UserBranch[]> {

    const data: {branchId: String, 
        include: {roles: boolean, branches: boolean, users: boolean}} = {
        branchId: args.branchId, 
        include: {
            roles: true,
            branches: true, 
            users: true,
        }
    }
    
    return await UserBranchModel.findManyForeignKey(context.prisma.users_branches, data);
}