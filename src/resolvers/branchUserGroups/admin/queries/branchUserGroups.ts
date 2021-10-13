import { BranchUserGroup } from "../../types";
import { BranchUserGroup as BranchUserGroupModel} from "@mystoreaid/prisma-models";

export default async function branchUserGroups (parent: any, args: BranchUserGroup, context: any): Promise<BranchUserGroup[]> {
    return BranchUserGroupModel.findMany();
}