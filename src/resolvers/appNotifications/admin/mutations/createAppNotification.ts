import AppNotificationModel from '../../AppNotificationModel';
import { AppNotification } from '../../types';

export default async function createAppNotification (parent: any, args: AppNotification, context: any): Promise<AppNotification> {
    return AppNotificationModel.createOne(context.prisma.app_notifications, args);
}