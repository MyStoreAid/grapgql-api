import { Role } from '../types';
import RoleModel from '../RoleModel';

export default async function createRole (parent: any, args: Role, context: any): Promise<Role> {
    
    return await RoleModel.createOne(context.prisma.roles, args);
}