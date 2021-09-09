import { Role } from "../../types";
import { Role as RoleModel } from "@mystoreaid/prisma-models";

export default async function roles (parent: any, args: Role): Promise<Role[]> {
    return RoleModel.findMany();
}