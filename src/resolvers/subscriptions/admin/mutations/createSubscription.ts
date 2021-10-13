import {Subscription as SubscriptionModel} from "@mystoreaid/prisma-models";
import { Subscription } from '../../types';

export default async function createSubscription (parent: any, args: Subscription, context: any): Promise<Subscription> {
    const data = {
        data: {
        name: args.name,
        description: args ? args.description : "",
        numberOfBranches: args ? args.numberOfBranches: 0,
        companies: args.companiesId ? { connect: { id: args.companiesId} } : undefined
        },
        include: {
            companies: true
        }
    };

    return await SubscriptionModel.createOneForeignKey(data)
}