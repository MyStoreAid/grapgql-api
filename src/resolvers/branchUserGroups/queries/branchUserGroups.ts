import { BranchUserGroup } from "../types";

export default async function branchUserGroups (parent: any, args: BranchUserGroup, context: any): Promise<BranchUserGroup[]> {
    return context.prisma.branch_user_groups.findMany();
}