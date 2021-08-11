
import moment from 'moment';

export default async function createClient (parent: any, args: any, context: any) {
    const currentTime = moment().toDate().getTime();
    
    return await context.prisma.clients.create({
        data: {
            id: args.id,
            name: args.name,
            displayName: args.name,
            created_at: currentTime,
            updated_at: currentTime,
            lastSyncAt: currentTime
        }
    });
}