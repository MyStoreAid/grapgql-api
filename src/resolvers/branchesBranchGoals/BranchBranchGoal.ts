import { PrismaModelContext } from "types/prisma";
import Model from "../../models/Model";

export default class BranchesBranchGoalModel extends Model {
    static async createMany(context: PrismaModelContext, params: any): Promise<any> {
        const data = params;
        return context.createMany({ data });
    }
    
}