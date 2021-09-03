import Model from "../../models/Model";

export default class AppNotificationModel extends Model{

    static get table() {
        return this.connection.app_notifications;
    }
    
}