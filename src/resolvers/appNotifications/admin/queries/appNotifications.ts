import AppNotificationModel from "../../AppNotificationModel";
import { AppNotification } from "../../types";

export default async function appNotifications (parent: any, args: AppNotification): Promise<AppNotification[]> {
    return await AppNotificationModel.findMany();
}