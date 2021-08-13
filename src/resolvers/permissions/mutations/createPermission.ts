import { Permission } from '../types';
import TimeHelper from '../../../helpers/TimeHelper';
import UuidHelper from "../../../helpers/UuidHelper";

export default async function createPermission (parent: any, args: any, context: any): Promise<Permission> {
    const currentTime = TimeHelper.currentTime;
    
    return await context.prisma.permissions.create({
        data: {
            id: UuidHelper.newUuid,
            name: args.name,
            description: args ? args.description : "",
            created_at: currentTime,
            updated_at: currentTime,
            
        }
    });
}