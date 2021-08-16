import TimeHelper from '../../../helpers/TimeHelper';
import UuidHelper from '../../../helpers/UuidHelper';
import { AppNotification } from '../types';

export default async function createAppNotification (parent: any, args: AppNotification, context: any): Promise<AppNotification> {
    const currentTime: number = TimeHelper.currentTime;
    return context.prisma.app_notifications.create({
        data: {
            id: UuidHelper.newUuid,
            title: args.title,
            message: args.message,
            actionMessage: args.actionMessage,
            actionPath: args.actionPath,
            active: true,
            operation: args.operation,
            cron: args.cron,
            created_at: currentTime,
            updated_at: currentTime,
            
           
        }
    });
}