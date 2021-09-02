import { PrismaModelContext } from "types/prisma";
import Model from "./Model";

export default class UserAccess extends Model {
    static get primaryKeyName(): string {
        return 'userId';
    }
    
    static get timestampFields(): string[] {
        return [
            'created_at',
            'updated_at'
        ];
    }

    static async deleteOne(context: PrismaModelContext, primaryKey: string): Promise<any> {
        if (this.softDelete) {
            const data: { deleted: boolean } = { deleted : true };
            this._setUpdateTimestampFields(data);

            return context.update({
                where: {
                    userId: primaryKey
                },
                data
            });
        } else {
            return context.delete({
                where: {
                    userId: primaryKey
                }
            });
        }
    }
}
