import { AppNotification, AppNotificationIdArgs } from "../types";

export default async function appNotification (parent: any, args: AppNotificationIdArgs, context: any): Promise<AppNotification> | never {
    let result!: AppNotification;
    const appNotificationId: String =  args.id;
    
    try {
        result = await context.prisma.app_notifications.findUnique({
            where: {
                id: appNotificationId
            }
        });
    } catch (error: unknown) {
        new Error(`There was an error getting AppNotification with ID ${appNotificationId}.`);
    }

    if (!result) {
        new Error(`There is no AppNotification with ID ${appNotificationId}.`);
    }

    return result;
}