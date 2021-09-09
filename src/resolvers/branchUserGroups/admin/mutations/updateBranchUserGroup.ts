import { BranchUserGroup as BranchUserGroupModel} from "@mystoreaid/prisma-models";
import { BranchUserGroup } from '../../types';

export default async function updateBranchUserGroup (parent: any, args: BranchUserGroup, context: any, info: any): Promise<BranchUserGroup> | never {
    let existingBranchUserGroup!: BranchUserGroup;
    const branchUserGroupId: string = args.id;
    
    try {
        existingBranchUserGroup = await context.prisma.branch_user_groups.findUnique({ where: {id: branchUserGroupId } });
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching business category with ID ${branchUserGroupId}`);
    }

    if(!existingBranchUserGroup) {
        throw new Error(`There is no business category with ID ${branchUserGroupId}`);
    }

    return await BranchUserGroupModel.updateOne(branchUserGroupId, args);
}