import { BranchUserGroup,BranchUserGroupIdArgs } from "../types";
import TimeHelper from '../../../helpers/TimeHelper';



export default async function deleteBranchUserGroup (parent: any, args: BranchUserGroupIdArgs, context: any): Promise<BranchUserGroup> | never {
    let existingBranchUserGroup!: BranchUserGroup;
    const branchUserGroupId: String = args.id;

    try {
        existingBranchUserGroup = await context.prisma.branch_user_groups.findUnique({ where: {id: branchUserGroupId}});
    } catch (error: unknown) {
        console.error(error);
        throw new Error(`There is an error fetching a business category with ID ${branchUserGroupId}`);
    }

    if(!existingBranchUserGroup) {
        throw new Error(`There is no business category with ID ${branchUserGroupId}`);
    }

    return await context.prisma.branch_user_groups.update({
        where: {
            id: branchUserGroupId
        },
        data: {
            deleted : true,
            updated_at: TimeHelper.currentTime,

        }
    })
}