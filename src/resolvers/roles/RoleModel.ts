import Model from "../../models/Model";
import { Role } from "./types";

export default class RoleModel extends Model {

    static get table() {
        return this.connection.roles;
    }

    
}