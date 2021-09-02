import SubscriptionModel from "../../resolvers/subscriptions/SubscriptionModel";
import { PrismaModelContext } from "types/prisma";
import Model from "../../models/Model";

export default class CompanyModel extends Model {
    static get timestampFields(): string[] {
        return [
            'created_at',
            'updated_at',
            'lastSyncAt'
        ];
    }

    static async defaultSubscription(subscriptionContext: PrismaModelContext) {
        return SubscriptionModel.findOneWhere(subscriptionContext, {name: 'Bronze'});
      }
    
}