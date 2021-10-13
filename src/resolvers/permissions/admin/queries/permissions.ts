import { Permission } from "../../types";
import { Permission as PermissionModel} from "@mystoreaid/prisma-models";

export default async function permissions (parent: any, args: Permission): Promise<Permission[]> {
    return PermissionModel.findMany();
}