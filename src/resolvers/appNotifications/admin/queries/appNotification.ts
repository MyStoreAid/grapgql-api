import {AppNotification as AppNotificationModel} from "@mystoreaid/prisma-models"
import { AppNotification, AppNotificationIdArgs } from "../../types";

export default async function appNotification (parent: any, args: AppNotificationIdArgs): Promise<AppNotification> | never {
    let result!: AppNotification;
    const appNotificationId: string =  args.id;
    
    try {
        result = await AppNotificationModel.findOne(appNotificationId);
    } catch (error: unknown) {
        new Error(`There was an error getting AppNotification with ID ${appNotificationId}.`);
    }

    if (!result) {
        new Error(`There is no AppNotification with ID ${appNotificationId}.`);
    }

    return result;
}