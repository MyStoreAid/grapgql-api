import { Role } from '../types';
import TimeHelper from '../../../helpers/TimeHelper';

export default async function updateRole (parent:any, args:any, context:any, info:any): Promise<Role> | never{

    let existingRole!: Role;
    const currentTime: number = TimeHelper.currentTime
    const roleId: String = args.id;

    try {
        existingRole = await context.prisma.roles.findUnique({ where: {id: roleId } });
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching Role with ID ${roleId}`);
    }

    if(!existingRole) {
        throw new Error(`There is no Role with ID ${roleId}`);
    }

    return await context.prisma.roles.update({
        where: {
            id: roleId
        },
        data: {
            name: args.name,
            description: args.description,
            updated_at: currentTime,
        }
    });
}