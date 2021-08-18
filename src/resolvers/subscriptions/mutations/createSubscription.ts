import TimeHelper from '../../../helpers/TimeHelper';
import UuidHelper from '../../../helpers/UuidHelper';
import { Subscription } from '../types';

export default async function createSubscription (parent: any, args: Subscription, context: any): Promise<Subscription> {
    const currentTime: number = TimeHelper.currentTime;

    return await context.prisma.subscriptions.create({
        data: {
            id: UuidHelper.newUuid,
            name: args.name,
            description: args ? args.description : "",
            numberOfBranches: args ? args.numberOfBranches: 0,
            created_at: currentTime,
            updated_at: currentTime,
            companies: args.companiesId ? { connect: { id: args.companiesId} } : undefined
            
        }
    });
}