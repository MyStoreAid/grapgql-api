import { PrismaModelContext } from "types/prisma";
import Model from "../../models/Model";

export default class BranchUserGroupModel extends Model {
    static async getDefault(context: PrismaModelContext) {
        return this.findOneWhere(context, { name: 'Type C' });
      }
    
}