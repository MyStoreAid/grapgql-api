import { PrismaModelContext } from "types/prisma";
import Model from "../../models/Model";

export default class BranchProductCategoryModel extends Model {
    static get timestampFields(): string[] {
        return [
            'created_at',
            'updated_at',
            'server_created_at',
            'last_modified'
        ];
    }

    static async createMany(context: PrismaModelContext, params: any): Promise<any> {
        const data = params;
        return context.createMany({ data });
    }
}