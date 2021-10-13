import { BranchUserGroup,BranchUserGroupIdArgs } from "../../types";
import { BranchUserGroup as BranchUserGroupModel} from "@mystoreaid/prisma-models";

export default async function deleteBranchUserGroup (parent: any, args: BranchUserGroupIdArgs, context: any): Promise<BranchUserGroup> | never {
    let existingBranchUserGroup!: BranchUserGroup;
    const branchUserGroupId: string = args.id;

    try {
        existingBranchUserGroup = await context.prisma.branch_user_groups.findUnique({ where: {id: branchUserGroupId}});
    } catch (error: unknown) {
        console.error(error);
        throw new Error(`There is an error fetching a business category with ID ${branchUserGroupId}`);
    }

    if(!existingBranchUserGroup) {
        throw new Error(`There is no business category with ID ${branchUserGroupId}`);
    }

    return await BranchUserGroupModel.deleteOne(branchUserGroupId);
       
}