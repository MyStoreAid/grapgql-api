import { BranchGoal } from "../../types";
import BranchGoalModel from "../../BranchGoalModel";

export default async function createBranchGoal (parent: any, args: BranchGoal, context: any): Promise<BranchGoal> {
    
    return await BranchGoalModel.createOne(context.prisma.branch_goals, args);
}