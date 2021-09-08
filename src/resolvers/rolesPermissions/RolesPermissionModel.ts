import Model from "../../models/Model";


export default class RolesPermissionModel extends Model {

    static get table() {
        return this.connection.roles_permissions;
    }
    static async findMany(): Promise<any[]> {
        return this.table.findMany({
            include: {
                roles: true,
                permissions: true,
            }
        })
    }

    static async findManyForeignKey(params: any): Promise<any[]> {
        return this.table.findMany({
            include: params,
        });
    }

    static async findManyWhere(params: any) {
        const condition = params;

        return this.table.findMany({
            where: condition,
            include: {
                roles: true,
                permissions: true,
            }
            
        });
    }

    
}