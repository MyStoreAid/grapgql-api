import TimeHelper from '../../../helpers/TimeHelper';
import {AppNotification, AppNotificationIdArgs} from '../types';

export default async function deleteAppNotification (parent: any, args: AppNotificationIdArgs, context: any): Promise<AppNotification> | never {
    let existingAppNotification!: AppNotification;
    const appNotificationId: String = args.id;

    try {
        existingAppNotification = await context.prisma.app_notifications.findUnique({ where: {id: appNotificationId}});
    } catch (error: unknown) {
        console.error(error);
        throw new Error(`There is an error fetching a AppNotification with ID ${appNotificationId}`);
    }

    if(!existingAppNotification) {
        throw new Error(`There is no AppNotification with ID ${appNotificationId}`);
    }

    return context.prisma.app_notifications.update({
        where: {
            id: appNotificationId
        },
        data: {
            deleted : true,
            active: false,
            updated_at: TimeHelper.currentTime,
        }
    })
}