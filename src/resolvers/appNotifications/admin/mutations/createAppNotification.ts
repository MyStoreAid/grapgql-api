import AppNotificationModel from '../../AppNotificationModel';
import { AppNotification } from '../../types';

export default async function createAppNotification (parent: any, args: AppNotification): Promise<AppNotification> {
    return AppNotificationModel.createOne(args);
}