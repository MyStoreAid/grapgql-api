import { BranchUserGroup, BranchUserGroupIdArgs } from "../../types";

export default async function branchUserGroup (parent: any, args: BranchUserGroupIdArgs, context: any, info: any): Promise<BranchUserGroup> | never {
    let result! : BranchUserGroup;
    const branchUserGroupId: String = args.id;

    try {
        result = await context.prisma.branch_user_groups.findUnique({
            where: {
                id: branchUserGroupId
            }
        });
    } catch (error: unknown) {
        new Error(`There was an error getting business category with ID ${branchUserGroupId}.`);
    }

    if (!result) {
        new Error(`There is no business category with ID ${branchUserGroupId}.`);
    }


    return result;

}