import TimeHelper from '../../../../helpers/TimeHelper';
import UuidHelper from '../../../../helpers/UuidHelper';
import { BranchUserGroup } from '../../types';

export default async function createBranchUserGroup (parent: any, args: BranchUserGroup, context: any): Promise<BranchUserGroup> {
    const currentTime: number = TimeHelper.currentTime;

    return await context.prisma.branch_user_groups.create({
        data: {
            id: UuidHelper.newUuid,
            name: args.name,
            description: args ? args.description : "",
            created_at: currentTime,
            updated_at: currentTime,
            
        }
    });
}