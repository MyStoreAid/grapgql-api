import { Permission } from '../../types';
import PermissionModel from '../../PermissionModel';

export default async function createPermission (parent: any, args: any): Promise<Permission> {
   
    return await PermissionModel.createOne(args)
}