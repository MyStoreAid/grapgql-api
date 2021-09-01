import SubscriptionModel from '../../SubscriptionModel';
import { Subscription} from '../../types';

export default async function updateSubscription (parent: any, args: Subscription, context: any, info: any): Promise<Subscription> | never {
    let existingSubscription!: Subscription;
    const subscriptionId: string = args.id;
    

    try {
        existingSubscription = await SubscriptionModel.findOne(context.prisma.subscriptions, subscriptionId);
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching business category with ID ${subscriptionId}`);
    }

    if(!existingSubscription) {
        throw new Error(`There is no business category with ID ${subscriptionId}`);
    }

    return SubscriptionModel.updateOne(context.prisma.subscriptions, subscriptionId, args)

    
}