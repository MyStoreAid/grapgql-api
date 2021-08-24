import SubscriptionModel from "../SubscriptionModel";
import { Subscription } from "../types";

export default async function subscriptions (parent: any, args: Subscription, context: any): Promise<Subscription[]> {
    return SubscriptionModel.findMany(context.prisma.subscriptions);
}