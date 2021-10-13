import { Permission } from '../../types';
import { Permission as PermissionModel} from "@mystoreaid/prisma-models";

export default async function createPermission (parent: any, args: any): Promise<Permission> {
    return await PermissionModel.createOne(args)
}