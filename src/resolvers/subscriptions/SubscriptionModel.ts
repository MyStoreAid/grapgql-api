import Model from "../../models/Model";

export default class SubscriptionModel extends Model {

    static get table() {
        return this.connection.subscriptions;
    }
    
}