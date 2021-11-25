import { UserBranch as UserBranchModel} from "@mystoreaid/prisma-models";
import { UserBranchResponse, UserIdArgs, UserBranch } from "resolvers/userBranches/types";

export default async function userBranches (parent: any, args: UserIdArgs): Promise<Array<UserBranchResponse>> | never {
    let existingUserBranches: Array<UserBranch> = []
    let userBranches: Array<UserBranchResponse> = []
    let userId: string = args.userId;

    try{
        existingUserBranches = await UserBranchModel.findManyWhereForeignKey({ userId: userId }, { branches: true, companies: true, roles: true });
    }
    catch (error: any) {
        throw new Error(`There was an error finding User Branches with User ID ${userId}`);
    }

    if(existingUserBranches) {
        for (let existingUserBranch of existingUserBranches) {
            userBranches.push(
                {...existingUserBranch.branches,
                roles: existingUserBranch.roles,
                user_branches: existingUserBranch
            });
        }

        return userBranches;
    }

    throw new Error(`There exist no User Branches with User ID ${userId} and Company ID`);
}