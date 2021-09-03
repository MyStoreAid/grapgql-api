import Model from "../../models/Model";

export default class InternalBusinessCategoryModel extends Model {

    static get table() {
        return this.connection.internal_business_categories;
    }
    
}