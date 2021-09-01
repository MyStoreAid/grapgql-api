import { Permission } from "../../types";
import PermissionModel from "../../PermissionModel";

export default async function permissions (parent: any, args: Permission, context: any): Promise<Permission[]> {
    return PermissionModel.findMany(context.prisma.permissions);
}