import { Role } from '../../types';
import RoleModel from '../../RoleModel';

export default async function createRole (parent: any, args: Role): Promise<Role> {
    
    return await RoleModel.createOne(args);
}