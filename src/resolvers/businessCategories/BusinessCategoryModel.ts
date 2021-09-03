import Model from "../../models/Model";

export default class BusinessCategoryModel extends Model {
    static get table() {
        return this.connection.business_categories;
    }
    
}