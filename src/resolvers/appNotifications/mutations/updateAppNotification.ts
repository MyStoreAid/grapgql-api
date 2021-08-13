import TimeHelper from '../../../helpers/TimeHelper';
import { AppNotification } from "../types";

export default async function updateAppNotification(parent: any, args: AppNotification, context: any): Promise<AppNotification> | never {
    let existingAppNotification!: AppNotification;
    const appNotificationId: String = args.id;
    
    try {
        existingAppNotification = await context.prisma.app_notifications.findUnique({ where: {id: appNotificationId } });
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching AppNotifications with ID ${appNotificationId}`);
    }

    if(!existingAppNotification) {
        throw new Error(`There is no AppNotification with ID ${appNotificationId}`);
    }

    return context.prisma.app_notifications.update({
        where: {
            id: appNotificationId
        },
        data: {
            title: args.title,
            message: args.message,
            actionMessage: args.actionMessage,
            actionPath: args.actionPath,
            active: args.active,
            operation: args.operation,
            cron: args.cron,
            updated_at: TimeHelper.currentTime,
        }
    });
}