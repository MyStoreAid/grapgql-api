import Model from "../../models/Model";

export default class UserCompanyModel extends Model {

    static get table() {
        return this.connection.users_companies;
    }
    
}