import SubscriptionModel from "../../SubscriptionModel";
import { Subscription } from "../../types";

export default async function subscriptions (parent: any, args: Subscription): Promise<Subscription[]> {
    return SubscriptionModel.findMany();
}