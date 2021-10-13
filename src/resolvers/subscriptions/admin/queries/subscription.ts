import {Subscription as SubscriptionModel} from "@mystoreaid/prisma-models";
import { Subscription, SubscriptionIdArgs } from "../../types";

export default async function subscription (parent: any, args: SubscriptionIdArgs): Promise<Subscription> | never {
    let result! : Subscription;
    const subscriptionId: string = args.id;

    try {
        result = await SubscriptionModel.findOne(subscriptionId)
    } catch (error: unknown) {
        new Error(`There was an error getting business category with ID ${subscriptionId}.`);
    }

    if (!result) {
        new Error(`There is no business category with ID ${subscriptionId}.`);
    }


    return result;

}