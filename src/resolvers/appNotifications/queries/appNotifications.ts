import { AppNotification } from "../types";

export default async function appNotifications (parent: any, args: AppNotification, context: any): Promise<AppNotification[]> {
    return await context.prisma.app_notifications.findMany();
}