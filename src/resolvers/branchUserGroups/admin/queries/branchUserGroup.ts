import { BranchUserGroup, BranchUserGroupIdArgs } from "../../types";
import { BranchUserGroup as BranchUserGroupModel} from "@mystoreaid/prisma-models";

export default async function branchUserGroup (parent: any, args: BranchUserGroupIdArgs, context: any, info: any): Promise<BranchUserGroup> | never {
    let result! : BranchUserGroup;
    const branchUserGroupId: string = args.id;

    try {
        result = await BranchUserGroupModel.findOne(branchUserGroupId);
    } catch (error: unknown) {
        new Error(`There was an error getting business category with ID ${branchUserGroupId}.`);
    }

    if (!result) {
        new Error(`There is no business category with ID ${branchUserGroupId}.`);
    }


    return result;

}