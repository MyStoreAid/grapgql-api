import AppNotificationModel from "../../AppNotificationModel";
import { AppNotification, AppNotificationIdArgs } from "../../types";

export default async function appNotification (parent: any, args: AppNotificationIdArgs, context: any): Promise<AppNotification> | never {
    let result!: AppNotification;
    const appNotificationId: string =  args.id;
    
    try {
        result = await AppNotificationModel.findOne(context.prisma.app_notifications, appNotificationId )
        
    } catch (error: unknown) {
        new Error(`There was an error getting AppNotification with ID ${appNotificationId}.`);
    }

    if (!result) {
        new Error(`There is no AppNotification with ID ${appNotificationId}.`);
    }

    return result;
}