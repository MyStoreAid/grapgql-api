import { Role } from '../types';
import TimeHelper from '../../../helpers/TimeHelper';
import UuidHelper from "../../../helpers/UuidHelper";

export default async function createRole (parent: any, args: Role, context: any): Promise<Role> {
    const currentTime = TimeHelper.currentTime;
    
    return await context.prisma.roles.create({
        data: {
            id: UuidHelper.newUuid,
            name: args.name,
            description: args ? args.description : "",
            created_at: currentTime,
            updated_at: currentTime,
            
        }
    });
}