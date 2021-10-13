import { Role } from '../../types';
import { Role as RoleModel } from "@mystoreaid/prisma-models";

export default async function createRole (parent: any, args: Role): Promise<Role> {
    
    return await RoleModel.createOne(args);
}