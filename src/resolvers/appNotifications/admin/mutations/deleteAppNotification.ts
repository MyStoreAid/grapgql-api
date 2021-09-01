import AppNotificationModel from "../../AppNotificationModel";
import {AppNotification, AppNotificationIdArgs} from '../../types';

export default async function deleteAppNotification (parent: any, args: AppNotificationIdArgs, context: any): Promise<AppNotification> | never {
    let existingAppNotification!: AppNotification;
    const appNotificationId: string = args.id;

    try {
        existingAppNotification = await AppNotificationModel.findOne(context.prisma.app_notifications, appNotificationId)
    } catch (error: unknown) {
        console.error(error);
        throw new Error(`There is an error fetching a AppNotification with ID ${appNotificationId}`);
    }

    if(!existingAppNotification) {
        throw new Error(`There is no AppNotification with ID ${appNotificationId}`);
    }

    return AppNotificationModel.deleteOne(context.prisma.app_notifications, appNotificationId);
}