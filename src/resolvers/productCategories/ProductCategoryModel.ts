import Model from "../../models/Model";

export default class ProductCategoryModel extends Model {

    static get table() {
        return this.connection.product_categories;
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