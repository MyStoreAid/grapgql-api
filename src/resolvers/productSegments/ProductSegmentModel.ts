import Model from "../../models/Model";

export default class ProductSegmentModel extends Model {

    static get table() {
        return this.connection.product_segments;
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