import { Permission } from '../types';
import TimeHelper from '../../../helpers/TimeHelper';

export default async function updatePermission (parent: any, args: Permission, context: any): Promise<Permission> | never {

    let existingPermission!: Permission;
    const permissionId: String = args.id;
    const currentTime: number = TimeHelper.currentTime;

    try {
        existingPermission = await context.prisma.permissions.findUnique({ where: {id: permissionId } });
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching Permission with ID ${permissionId}`);
    }

    if(!existingPermission) {
        throw new Error(`There is no Permission with ID ${permissionId}`);
    }

    return await context.prisma.permissions.update({
        where: {
            id: permissionId
        },
        data: {
            name: args.name,
            description:args.description,
            updated_at: currentTime,

        }
    });
}