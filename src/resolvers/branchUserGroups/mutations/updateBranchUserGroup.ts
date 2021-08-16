import TimeHelper from '../../../helpers/TimeHelper';
import { BranchUserGroup } from '../types';

export default async function updateBranchUserGroup (parent: any, args: BranchUserGroup, context: any, info: any): Promise<BranchUserGroup> | never {
    let existingBranchUserGroup!: BranchUserGroup;
    const branchUserGroupId: String = args.id;
    const currentTime: number = TimeHelper.currentTime;

    try {
        existingBranchUserGroup = await context.prisma.branch_user_groups.findUnique({ where: {id: branchUserGroupId } });
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching business category with ID ${branchUserGroupId}`);
    }

    if(!existingBranchUserGroup) {
        throw new Error(`There is no business category with ID ${branchUserGroupId}`);
    }

    return await context.prisma.branch_user_groups.update({
        where: {
            id: branchUserGroupId
        },
        data: {
            name: args.name,
            description: args.description,
            updated_at: currentTime,

        }
    });
}