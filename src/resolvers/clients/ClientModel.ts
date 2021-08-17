import Model from "../../models/Model";
import { PrismaModelContext } from "types/prisma";

export default class ClientModel extends Model {
    static get primaryKeyName(): string {
        return 'name';
    }

    static get timestampFields(): string[] {
        return [
            'created_at',
            'updated_at',
            'lastSyncAt'
        ];
    }

    
    static async findOne(context: PrismaModelContext, primaryKey: string): Promise<any> {
        const condition: {name: string, deleted?: boolean} = {
            name: primaryKey
        };
        if (this.softDelete) {
            condition.deleted = false;
        }
        
        const rows = await context.findMany({
            where: condition
        });

        return rows[0];
    }

    static async createOne(context: PrismaModelContext, params: any): Promise<any> {
        const data = params;
        this._setTimestampToFields(data);
        data.displayName = data.name;

        return context.create({ data });
    }


    static async updateOne(context: PrismaModelContext, primaryKey: String,  params: any): Promise<any> {
        const data = params;
        this._setUpdateTimestampFields(data);

        return context.update({
            where: {
                name: primaryKey
            },
            data 
        });
    }

    static async deleteOne(context: PrismaModelContext, primaryKey: string): Promise<any> {
        const data: { deleted: boolean } = { deleted : true };
        this._setUpdateTimestampFields(data);

        return context.update({
            where: {
                name: primaryKey
            },
            data
        });
           
    }
}