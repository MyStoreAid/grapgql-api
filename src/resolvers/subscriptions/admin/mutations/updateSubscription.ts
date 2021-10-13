import {Subscription as SubscriptionModel} from "@mystoreaid/prisma-models";
import { Subscription} from '../../types';

export default async function updateSubscription (parent: any, args: Subscription): Promise<Subscription> | never {
    let existingSubscription!: Subscription;
    const subscriptionId: string = args.id;
    

    try {
        existingSubscription = await SubscriptionModel.findOne(subscriptionId);
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching business category with ID ${subscriptionId}`);
    }

    if(!existingSubscription) {
        throw new Error(`There is no business category with ID ${subscriptionId}`);
    }

    return SubscriptionModel.updateOne(subscriptionId, args)

    
}