import { AppNotification } from '../../types';
import {AppNotification as AppNotificationModel} from "@mystoreaid/prisma-models"

export default async function createAppNotification (parent: any, args: AppNotification): Promise<AppNotification> {
    return AppNotificationModel.createOne(args);
}