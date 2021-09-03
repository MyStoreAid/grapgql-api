import BranchGoalModel from "../../BranchGoalModel";
import { BranchGoal } from "../../types";

export default async function branchGoals (parent: any, args: BranchGoal): Promise<BranchGoal[]> {
    return await BranchGoalModel.findMany();
}