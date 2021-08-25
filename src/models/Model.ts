import UuidHelper from "../helpers/UuidHelper";
import TimeHelper from "../helpers/TimeHelper";
import { PrismaModelContext } from "types/prisma";



export default class Model {

    static get softDelete() {
        return true;
    } 

    static get timestampFields(): string[] {
        return [
            'created_at',
            'updated_at'
        ];
    }

    static get primaryKeyName(): string {
        return 'id';
    }

    static _setTimestampToFields(data: any): void {
        const currentTime: number = TimeHelper.currentTime;
        this.timestampFields.forEach(field => {
            data[field] = currentTime;
        });
    }

    static _setUpdateTimestampFields(data: any): void {
        const currentTime: number = TimeHelper.currentTime;
        if (this.timestampFields.includes('last_modified')) {
            data.last_modified = currentTime;
        }
        if (this.timestampFields.includes('server_created_at')) {
            data.server_created_at = currentTime;
        }
        data.updated_at = currentTime;
    }

    static async findMany(context: PrismaModelContext): Promise<any[]> {
        const condition: { deleted?: boolean } = {};
        if (this.softDelete) {
            condition.deleted = false
        }
        
        return context.findMany({
            where: condition
        })
    }

    static async findManyForeignKey(context: PrismaModelContext, params: any): Promise<any[]> {
        const condition: { deleted?: boolean } = {};
        if (this.softDelete) {
            condition.deleted = false
        }
        
        return context.findMany({
            where: condition,
            include: params,
        } 
        )
    }

    static async findOne(context: PrismaModelContext, primaryKey: string): Promise<any> {
        const condition: {id: string, deleted?: boolean} = {
            id: primaryKey
        };
        if (this.softDelete) {
            condition.deleted = false;
        }

       
        
        const rows = await context.findMany({
            where: condition
        });

        return rows[0];
    }

    static async findOneWhere(context: PrismaModelContext, condition: any): Promise<any> {
        condition.deleted = !this.softDelete
        
        
        const rows = await context.findMany({
            where: condition
        });

        return rows[0];
    }

    static async findOneForeignKey(context: PrismaModelContext, primaryKey: string, params: any): Promise<any> {
        const condition: {id: string, deleted?: boolean} = {
            id: primaryKey
        };
        if (this.softDelete) {
            condition.deleted = false;
        }
        
        const rows = await context.findMany({
            where: condition,
            include: params,
        });

        return rows[0];
    }

    static async createOne(context: PrismaModelContext, params: any): Promise<any> {
        const data = params;
        this._setTimestampToFields(data);
        data[this.primaryKeyName] = UuidHelper.newUuid;

        return context.create({ data });
    }

    static async createOneForeignKey(context: PrismaModelContext, params: any): Promise<any> {
        const data = params.data;
        const include = params.include;

        this._setTimestampToFields(data);
        data[this.primaryKeyName] = UuidHelper.newUuid;

        return context.create({ data, include });
    }

    static async updateOne(context: PrismaModelContext, primaryKey: String,  params: any): Promise<any> {
        const data = params;
        this._setUpdateTimestampFields(data);

        return context.update({
            where: {
                id: primaryKey
            },
            data 
        });
    }

    static async updateOneForeignKey(context: PrismaModelContext, primaryKey: String,  params: any): Promise<any> {
        const data = params.data;
        const include = params.include;
        this._setUpdateTimestampFields(data);
        

        return context.update({
            where: {
                id: primaryKey
            },
            data,
            include
        });
       
    }

    static async deleteOne(context: PrismaModelContext, primaryKey: string): Promise<any> {
        if (this.softDelete) {
            const data: { deleted: boolean } = { deleted : true };
            this._setUpdateTimestampFields(data);

            return context.update({
                where: {
                    id: primaryKey
                },
                data
            });
        } else {
            return context.delete({
                where: {
                    id: primaryKey
                }
            });
        }   
    }
}