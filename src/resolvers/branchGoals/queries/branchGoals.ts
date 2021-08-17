import BranchGoalModel from "../BranchGoalModel";
import { BranchGoal } from "../types";

export default async function branchGoals (parent: any, args: BranchGoal, context: any): Promise<BranchGoal[]> {
    return await BranchGoalModel.findMany(context.prisma.branch_goals);
}