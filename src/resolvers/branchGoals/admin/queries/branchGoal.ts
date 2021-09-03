import BranchGoalModel from "../../BranchGoalModel";
import { BranchGoal, BranchGoalIdArgs } from "../../types";

export default async function branchGoal (parent: any, args: BranchGoalIdArgs, context: any): Promise<BranchGoal> | never {
    let result!: BranchGoal;
    const branchGoalId: string =  args.id;
    try {
        result = await BranchGoalModel.findOne(branchGoalId);
    } catch (error: unknown) {
        new Error(`There was an error getting BranchGoal with ID ${branchGoalId}.`);
    }

    if (!result) {
        new Error(`There is no BranchGoal with ID ${branchGoalId}.`);
    }

    return result;
}