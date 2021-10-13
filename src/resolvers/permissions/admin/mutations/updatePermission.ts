import { Permission } from '../../types';
import { Permission as PermissionModel} from "@mystoreaid/prisma-models";

export default async function updatePermission (parent: any, args: Permission): Promise<Permission> | never {

    let existingPermission!: Permission;
    const permissionId: string = args.id;

    try {
        existingPermission = await PermissionModel.findOne(permissionId);
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching Permission with ID ${permissionId}`);
    }

    if(!existingPermission) {
        throw new Error(`There is no Permission with ID ${permissionId}`);
    }

    return await PermissionModel.updateOne(permissionId, args);
}