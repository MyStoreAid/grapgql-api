import { PrismaModelContext } from "../../types/prisma";
import Model from "../../models/Model";

export default class UserModel extends Model {

    static get primaryKeyName(): string {
        return 'userId';
    }

    static get timestampFields(): string[] {
        return [
            'created_at',
            'updated_at',
            'server_created_at',
            'last_modified'
        ];
    }

    static async updateOne(context: PrismaModelContext, primaryKey: String,  params: any): Promise<any> {
        const data = params;
        this._setUpdateTimestampFields(data);

        return context.update({
            where: {
                userId: primaryKey
            },
            data 
        });
    }
}