import Model from "../../models/Model";

export default class RoleModel extends Model {

    static get table() {
        return this.connection.roles;
    }
    
}