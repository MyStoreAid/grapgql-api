import { Client} from "../types";
import TimeHelper from '../../../helpers/TimeHelper';

export default async function createClient (parent: any, args: Client, context: any): Promise<Client> {
    const currentTime = TimeHelper.currentTime;
    
    return await context.prisma.clients.create({
        data: {
            name: args.name,
            displayName: args.name,
            created_at: currentTime,
            updated_at: currentTime,
            lastSyncAt: currentTime
        }
    });
}