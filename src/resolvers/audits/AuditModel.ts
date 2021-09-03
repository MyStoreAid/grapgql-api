import Model from "../../models/Model";

export default class AuditModel extends Model{
    static get timestampFields(): string[] {
        return [
            'created_at',
            'updated_at',
            'server_created_at',
            'last_modified'
        ];
    }
    static get table() {
        return this.connection.audits;
    }
}