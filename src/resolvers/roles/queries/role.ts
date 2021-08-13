import { RoleIdArgs, Role } from "../types";

export default async function role (parent: any, args: RoleIdArgs, context: any): Promise<Role> | never {
    
    let result!: Role;
    const roleId: String = args.id;

    try {
        result = await context.prisma.roles.findUnique({
            where: {
                id: roleId
            }
        });
    } catch (error: unknown) {
        new Error(`There was an error getting Role with ID ${roleId}.`);
    }

    if (!result) {
        new Error(`There is no Role with ID ${roleId}.`);
    }

    return result;

}