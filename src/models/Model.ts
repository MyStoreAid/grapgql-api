import UuidHelper from "../helpers/UuidHelper";
import TimeHelper from "../helpers/TimeHelper";
import { PrismaModelContext } from "types/prisma";
import PrismaContextProvider from "../services/PrismaContextProvider";


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

    static get tableName(): any {
        throw new Error('Every model must have a table name');
    }

    static get connection() {
        return PrismaContextProvider.getConnection;
    }

    static get table(): any {
        return null;
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

    static async findMany(): Promise<any[]> {
        const condition: { deleted?: boolean } = {};
        if (this.softDelete) {
            condition.deleted = false
        }

        return this.table.findMany({
            where: condition
        })
    }

    static async findManyForeignKey(params: any): Promise<any[]> {
        const condition: { deleted?: boolean } = {};
        if (this.softDelete) {
            condition.deleted = false
        }

        return this.table.findMany({
            where: condition,
            include: params,
        });
    }

    static async findManyWhere(params: any) {
        const condition = params;
        if (this.softDelete) {
            condition.deleted = false;
        }
        return this.table.findMany({
            where: condition,
            
        });
    }

    static async findManyWhereForeignKey(condition: any, include: any) {
        
        if (this.softDelete) {
            condition.deleted = false;
        }
        return this.table.findMany({
            where: condition,
            include: include,
            
        });
    }

    static async findOne(primaryKey: string): Promise<any> {

        const condition: any = {};
        condition[this.primaryKeyName] = primaryKey;
        
        if (this.softDelete) {
            condition.deleted = false;
        }

        const rows = await this.table.findMany({
            where: condition
        });

        return rows[0];
    }

    static async findOneWhere(condition: any): Promise<any> {
        condition.deleted = !this.softDelete;


        const rows = await this.table.findMany({
            where: condition
        });

        return rows[0];
    }

    static async findOneForeignKey(primaryKey: string, params: any): Promise<any> {
        const condition: {id: string, deleted?: boolean} = {
            id: primaryKey
        };
        if (this.softDelete) {
            condition.deleted = false;
        }

        const rows = await this.table.findMany({
            where: condition,
            include: params,
        });

        return rows[0];
    }

    static async createOne(params: any): Promise<any> {
        const data = params;
        this._setTimestampToFields(data);
        data[this.primaryKeyName] = UuidHelper.newUuid;

        return this.table.create({ data });
    }

    static async createOneForeignKey(params: any): Promise<any> {
        const data = params.data;
        const include = params.include;

        this._setTimestampToFields(data);
        data[this.primaryKeyName] = UuidHelper.newUuid;

        return this.table.create({ data, include });
    }

    static async updateOne(primaryKey: String,  params: any): Promise<any> {
        const data = params;
        this._setUpdateTimestampFields(data);

        const condition: any = {};
        condition[this.primaryKeyName] = primaryKey;
        return this.table.update({
            where: condition,
            data
        });
    }

    static async updateOneForeignKey(primaryKey: String,  params: any): Promise<any> {
        const condition: any = {};
        condition[this.primaryKeyName] = primaryKey;

        const data = params.data;
        const include = params.include;
        this._setUpdateTimestampFields(data);

        return this.table.update({
            where: condition,
            data,
            include
        });

    }

    static async updateOneWhere(params: any): Promise<any> {
        const data = params.data;
        this._setUpdateTimestampFields(data);
        
        return this.table.update({
            where: params.where,
            data: data
        });
    }

    static async deleteOne(primaryKey: string): Promise<any> {
        const condition: any = {};
        condition[this.primaryKeyName] = primaryKey

        if (this.softDelete) {
            const data: { deleted: boolean } = { deleted : true };
            this._setUpdateTimestampFields(data);

            return this.table.update({
                where: condition,
                data
            });
        } else {
            return this.table.delete({
                where: condition
            });
        }
    }

    static async deleteOneForeignKey(primaryKey: string, params: any): Promise<any> {
        const condition: any = {};
        condition[this.primaryKeyName] = primaryKey

        if (this.softDelete) {
            const data: { deleted: boolean } = { deleted : true };
            this._setUpdateTimestampFields(data);

            return this.table.update({
                where: condition,
                data: data,
                include: params
            });
        } else {
            return this.table.delete({
                where: condition,
                include: params
            });
        }
    }

    static async deleteOneWhere(params: any): Promise<any> {
        const condition: any = params
        
        if (this.softDelete) {
            const data: { deleted: boolean } =  { deleted : true };
            this._setUpdateTimestampFields(data);

            return this.table.update({
                where: condition,
                data: data
            });
        } else {
            return this.table.delete({
                where: condition
            });
        }
    }

    

    static async deleteManyWhere(params: any): Promise<any> {
        const condition: any = params
        
        if (this.softDelete) {
            const data: { deleted: boolean } =  { deleted : true };
            this._setUpdateTimestampFields(data);

            return this.table.updateMany({
                where: condition,
                data: data
            });
        } else {
            return this.table.deleteMany({
                where: condition
            });
        }
    }
}
