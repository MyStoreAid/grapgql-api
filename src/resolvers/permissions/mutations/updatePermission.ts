import { Permission } from '../types';
import PermissionModel from '../PermissionModel';

export default async function updatePermission (parent: any, args: Permission, context: any): Promise<Permission> | never {

    let existingPermission!: Permission;
    const permissionId: string = args.id;

    try {
        existingPermission = await PermissionModel.findOne(context.prisma.permissions, permissionId);
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching Permission with ID ${permissionId}`);
    }

    if(!existingPermission) {
        throw new Error(`There is no Permission with ID ${permissionId}`);
    }

    return await PermissionModel.updateOne(context.prisma.permissions, permissionId, args);
}