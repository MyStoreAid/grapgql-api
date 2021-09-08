import Model from "../../models/Model";
import { PrismaModelContext } from "types/prisma";

export default class UserBranchModel extends Model {

    static get table() {
         
        return this.connection.users_branches;
    }

    static get timestampFields(): string[] {
        return [
            'created_at',
            'updated_at',
            'last_modified',
            'server_created_at'
        ];
    }

    static async findManyForeignKey(params: any): Promise<any[]> {
        const condition: any = params.condition;
        if (this.softDelete) {
            condition.deleted = false
        }
        
        return this.table.findMany({
            where: condition,
            include: params.include,
        } 
        )
    }
    
}