import { Permission } from "../../types";
import PermissionModel from "../../PermissionModel";

export default async function permissions (parent: any, args: Permission): Promise<Permission[]> {
    return PermissionModel.findMany();
}