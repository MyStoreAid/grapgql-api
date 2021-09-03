import Model from "../../models/Model";

export default class BranchesBranchGoalModel extends Model {
    static async createMany(params: any): Promise<any> {
        const data = params;
        return this.table.createMany({ data });
    }
}