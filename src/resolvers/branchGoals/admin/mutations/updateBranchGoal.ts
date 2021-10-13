import { BranchGoal } from "../../types";
import { BranchGoal as BranchGoalModel} from "@mystoreaid/prisma-models";

export default async function updateBranchGoal(parent: any, args: BranchGoal, context: any, info: any): Promise<BranchGoal> | never {
    
    let existingBranchGoal!: BranchGoal;
    const branchGoalId: string = args.id;
    
    try {
        existingBranchGoal = await BranchGoalModel.findOne(branchGoalId);
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching BranchGoals with ID ${branchGoalId}`);
    }

    if(!existingBranchGoal) {
        throw new Error(`There is no BranchGoal with ID ${branchGoalId}`);
    }

    return BranchGoalModel.updateOne(branchGoalId, args);
    
}