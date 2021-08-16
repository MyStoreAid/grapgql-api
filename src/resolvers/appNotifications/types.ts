export interface AppNotification {
    id: String,
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
    id: String 
}