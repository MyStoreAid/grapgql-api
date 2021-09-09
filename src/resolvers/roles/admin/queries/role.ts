import { RoleIdArgs, Role } from "../../types";
import { Role as RoleModel } from "@mystoreaid/prisma-models";

export default async function role (parent: any, args: RoleIdArgs): Promise<Role> | never {
    
    let result!: Role;
    const roleId: string = args.id;

    try {
        result = await RoleModel.findOne(roleId);
    } catch (error: unknown) {
        new Error(`There was an error getting Role with ID ${roleId}.`);
    }

    if (!result) {
        new Error(`There is no Role with ID ${roleId}.`);
    }

    return result;

}