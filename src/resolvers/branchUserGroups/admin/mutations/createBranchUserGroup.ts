import { BranchUserGroup as BranchUserGroupModel} from "@mystoreaid/prisma-models";
import TimeHelper from '../../../../helpers/TimeHelper';
import UuidHelper from '../../../../helpers/UuidHelper';
import { BranchUserGroup } from '../../types';

export default async function createBranchUserGroup (parent: any, args: BranchUserGroup): Promise<BranchUserGroup> {
    return await BranchUserGroupModel.createOne(args);
}