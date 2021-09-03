import { PermissionIdArgs, Permission } from "../../types";
import PermissionModel from "../../PermissionModel";

export default async function permission (parent: any, args: PermissionIdArgs): Promise<Permission> | never {
    let result!: Permission;
    const permissionId: string = args.id;

    try {
        result = await PermissionModel.findOne(permissionId);
    } catch (error: unknown) {
        new Error(`There was an error getting Permission with ID ${permissionId}.`);
    }

    if (!result) {
        new Error(`There is no Permission with ID ${permissionId}.`);
    }

    return result;

}