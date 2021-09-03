import BranchUserGroupModel from '../../../../resolvers/branchUserGroups/BranchUserGroupModel';
import TimeHelper from '../../../../helpers/TimeHelper';
import UuidHelper from '../../../../helpers/UuidHelper';
import { BranchUserGroup } from '../../types';

export default async function createBranchUserGroup (parent: any, args: BranchUserGroup): Promise<BranchUserGroup> {
    const currentTime: number = TimeHelper.currentTime;

    return await BranchUserGroupModel.table.create({
        data: {
            id: UuidHelper.newUuid,
            name: args.name,
            description: args ? args.description : "",
            created_at: currentTime,
            updated_at: currentTime,
            
        }
    });
}