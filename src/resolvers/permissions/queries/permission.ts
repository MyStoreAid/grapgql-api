import { PermissionIdArgs, Permission } from "../types";

export default async function permission (parent: any, args: PermissionIdArgs, context: any): Promise<Permission> | never {
    let result!: Permission;
    const permissionId: String = args.id;

    try {
        result = await context.prisma.permissions.findUnique({
            where: {
                id: permissionId
            }
        });
    } catch (error: unknown) {
        new Error(`There was an error getting Permission with ID ${permissionId}.`);
    }

    if (!result) {
        new Error(`There is no Permission with ID ${permissionId}.`);
    }

    return result;

}