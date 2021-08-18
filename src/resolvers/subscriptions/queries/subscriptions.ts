import { Subscription } from "../types";

export default async function subscriptions (parent: any, args: Subscription, context: any): Promise<Subscription[]> {
    return context.prisma.subscriptions.findMany();
}