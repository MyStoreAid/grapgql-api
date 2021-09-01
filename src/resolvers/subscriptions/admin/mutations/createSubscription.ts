import SubscriptionModel from '../../SubscriptionModel';
import { Subscription } from '../../types';

export default async function createSubscription (parent: any, args: Subscription, context: any): Promise<Subscription> {
    const data = {
        name: args.name,
        description: args ? args.description : "",
        numberOfBranches: args ? args.numberOfBranches: 0,
        companies: args.companiesId ? { connect: { id: args.companiesId} } : undefined
    };

    return await SubscriptionModel.createOne(context.prisma.subscriptions, data)
            
        
    
}