export type AppNotificationId = string;
export interface AppNotification {
    id: AppNotificationId,
    title: String,
    message: String,
    actionMessage: String,
    actionPath: String,
    active: boolean,
    operation: String,
    cron: String,
    created_at: number,
    updated_at: number,
    deleted: boolean,  
}

export interface AppNotificationIdArgs {
    id: AppNotificationId 
}