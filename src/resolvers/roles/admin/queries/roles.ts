import { Role } from "../../types";
import RoleModel from "../../RoleModel";

export default async function roles (parent: any, args: Role): Promise<Role[]> {
    return RoleModel.findMany();
}