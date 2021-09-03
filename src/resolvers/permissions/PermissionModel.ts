import Model from "../../models/Model";

export default class PermissionModel extends Model {
    
    static get table() {
        return this.connection.permissions;
    }
    
}