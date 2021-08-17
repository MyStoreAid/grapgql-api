import TimeHelper from '../../../helpers/TimeHelper';
import { Subscription, SubscriptionIdArgs} from '../types';

export default async function deleteSubscription (parent: any, args: SubscriptionIdArgs, context: any, info: any): Promise<Subscription> | never {
    let existingSubscription!: Subscription;
    const subscriptionId: String = args.id;
    const currentTime: number = TimeHelper.currentTime;

    try {
        existingSubscription = await context.prisma.subscriptions.findUnique({ where: {id: subscriptionId } });
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching business category with ID ${subscriptionId}`);
    }

    if(!existingSubscription) {
        throw new Error(`There is no business category with ID ${subscriptionId}`);
    }

    return await context.prisma.subscriptions.update({
        where: {
            id: subscriptionId
        },
        data: {
            deleted: true,
            updated_at: currentTime,

        }
    });
}