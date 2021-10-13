import {Subscription as SubscriptionModel} from "@mystoreaid/prisma-models";
import { Subscription } from "../../types";

export default async function subscriptions (parent: any, args: Subscription): Promise<Subscription[]> {
    return SubscriptionModel.findMany();
}