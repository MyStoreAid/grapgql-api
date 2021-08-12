import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

export default async function createRole (parent: any, args: any, context: any) {
    const currentTime = moment().toDate().getTime();
    
    return await context.prisma.roles.create({
        data: {
            id: uuidv4(),
            name: args.name,
            description: args ? args.description : "",
            created_at: currentTime,
            updated_at: currentTime,
            
        }
    });
}