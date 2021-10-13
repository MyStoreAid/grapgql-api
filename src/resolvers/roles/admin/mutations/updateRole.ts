import { Role } from '../../types';
import { Role as RoleModel } from "@mystoreaid/prisma-models";

export default async function updateRole (parent:any, args:any): Promise<Role> | never{

    let existingRole!: Role;
    const roleId: string = args.id;

    try {
        existingRole = await RoleModel.findOne(roleId);
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching Role with ID ${roleId}`);
    }

    if(!existingRole) {
        throw new Error(`There is no Role with ID ${roleId}`);
    }

    return await RoleModel.updateOne(roleId, args);
    
}