import { PrismaModelContext } from "types/prisma";
import Model from "../../models/Model";

export default class BranchUserGroupModel extends Model {
    static get table() {
      return this.connection.branch_user_groups;
    }
    static async getDefault() {
        return this.findOneWhere({ name: 'Type C' });
      }
    
}