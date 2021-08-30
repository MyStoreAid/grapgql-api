import Model from "../../models/Model";
import { PrismaModelContext } from "types/prisma";

export default class UserBranchModel extends Model {
    static get timestampFields(): string[] {
        return [
            'created_at',
            'updated_at',
            'last_modified',
            'server_created_at'
        ];
    }

    static async findManyForeignKey(context: PrismaModelContext, params: any): Promise<any[]> {
        const condition: {branchId?: String, deleted?: boolean } = {};
        if (this.softDelete) {
            condition.deleted = false
        }
        if (params.branchId) {
            condition.branchId = params.branchId 
        }
        console.log(condition);
        return context.findMany({
            where: condition,
            include: params.include,
        } 
        )
    }
    
}