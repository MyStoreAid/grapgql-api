import { RoleIdArgs, Role } from "../../types";
import RoleModel from "../../RoleModel";

export default async function role (parent: any, args: RoleIdArgs, context: any): Promise<Role> | never {
    
    let result!: Role;
    const roleId: string = args.id;

    try {
        result = await RoleModel.findOne(context.prisma.roles, roleId);
    } catch (error: unknown) {
        new Error(`There was an error getting Role with ID ${roleId}.`);
    }

    if (!result) {
        new Error(`There is no Role with ID ${roleId}.`);
    }

    return result;

}