import AppNotificationModel from "../../AppNotificationModel";
import { AppNotification } from "../../types";

export default async function appNotifications (parent: any, args: AppNotification, context: any): Promise<AppNotification[]> {
    return await AppNotificationModel.findMany(context.prisma.app_notifications);
}