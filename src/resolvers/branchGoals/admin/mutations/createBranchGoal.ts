import { BranchGoal } from "../../types";
import { BranchGoal as BranchGoalModel} from "@mystoreaid/prisma-models"

export default async function createBranchGoal (parent: any, args: BranchGoal, context: any): Promise<BranchGoal> {
    
    return await BranchGoalModel.createOne(args);
}