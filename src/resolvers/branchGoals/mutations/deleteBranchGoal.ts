import { BranchGoal, BranchGoalIdArgs } from "../types";
import BranchGoalModel from "../BranchGoalModel";

export default async function deleteBranchGoal (parent: any, args: BranchGoalIdArgs, context: any, info: any): Promise<BranchGoal> | never {

    let existingBranchGoal!: BranchGoal;
    const branchGoalId: string = args.id;

    try {
        existingBranchGoal = await BranchGoalModel.findOne(context.prisma.branch_goals, branchGoalId)
    } catch (error: unknown) {
        console.error(error);
        throw new Error(`There is an error fetching a BranchGoal with ID ${branchGoalId}`);
    }

    if(!existingBranchGoal) {
        throw new Error(`There is no BranchGoal with ID ${branchGoalId}`);
    }

    return BranchGoalModel.deleteOne(context.prisma.branch_goals, branchGoalId);
}