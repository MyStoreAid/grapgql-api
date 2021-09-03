import Model from "../../models/Model";

export default class ManufacturerModel extends Model {

    static get table() {
        return this.connection.manufacturers;
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