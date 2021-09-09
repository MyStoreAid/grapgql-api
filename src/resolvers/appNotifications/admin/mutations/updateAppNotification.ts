import {AppNotification as AppNotificationModel} from "@mystoreaid/prisma-models"
import { AppNotification } from "../../types";

export default async function updateAppNotification(parent: any, args: AppNotification): Promise<AppNotification> | never {
    let existingAppNotification!: AppNotification;
    const appNotificationId: string = args.id;
    
    try {
        existingAppNotification = await AppNotificationModel.findOne(appNotificationId);
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching AppNotifications with ID ${appNotificationId}`);
    }

    if(!existingAppNotification) {
        throw new Error(`There is no AppNotification with ID ${appNotificationId}`);
    }

    return AppNotificationModel.updateOne(appNotificationId, args)


}