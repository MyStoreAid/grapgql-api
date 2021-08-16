export interface Client {
    name: String,
    displayName: String,
    created_at: number,
    updated_at: number, 
    lastSyncAt: number,
    deleted: boolean,
}

export interface ClientIdArgs {
    name: String,
}
