import Model from "../../models/Model";

export default class BranchSupplierModel extends Model {
    static get table() {
        return this.connection.branch_suppliers;
    }

    static get timestampFields(): string[] {
        return [
            'created_at',
            'updated_at',
            'server_created_at',
            'last_modified',
            'dateAdded'
        ];
    }
}