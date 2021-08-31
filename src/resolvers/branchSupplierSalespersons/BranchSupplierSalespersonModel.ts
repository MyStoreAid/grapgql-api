import { PrismaModelContext } from "types/prisma";
import Model from "../../models/Model";

export default class BranchSupplierSalespersonModel extends Model {
    static get timestampFields(): string[] {
        return [
            'created_at',
            'updated_at',
            'server_created_at',
            'last_modified'
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