import { Role } from "../types";
import RoleModel from "../RoleModel";

export default async function roles (parent: any, args: Role, context: any): Promise<Role[]> {
    return RoleModel.findMany(context.prisma.roles);
}