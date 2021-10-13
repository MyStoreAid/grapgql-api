import { RolesPermission as RolesPermissionModel } from "@mystoreaid/prisma-models";
import { RolesPermission } from "../types";

export default async function createRolePermission (parent: any, args: RolesPermission): Promise<RolesPermission> {
    const data = {
        data: {
            permissions: { connect: { id: args.permissionId} },
            roles: { connect: { id: args.roleId}}
        },
        include: {
            permissions: true,
            roles: true
        }
    }
    
    return await RolesPermissionModel.createOneForeignKey(data);
}