import Model from "../../models/Model";

export default class BranchGoalModel extends Model {

    static get table() {
        return this.connection.branch_goals;
    }

    static get timestampFields(): string[] {
        return [
            'created_at',
            'updated_at',
            'server_created_at',
            'last_modified'
        ];
    }
}