import { Subscription, SubscriptionIdArgs } from "../types";

export default async function subscription (parent: any, args: SubscriptionIdArgs, context: any, info: any): Promise<Subscription> | never {
    let result! : Subscription;
    const subscriptionId: String = args.id;

    try {
        result = await context.prisma.subscriptions.findUnique({
            where: {
                id: subscriptionId
            }
        });
    } catch (error: unknown) {
        new Error(`There was an error getting business category with ID ${subscriptionId}.`);
    }

    if (!result) {
        new Error(`There is no business category with ID ${subscriptionId}.`);
    }


    return result;

}