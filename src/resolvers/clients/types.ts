export type ClientId = string;

export interface Client {
    name: ClientId,
    displayName: String,
    created_at: number,
    updated_at: number, 
    lastSyncAt: number,
    deleted: boolean,
}

export interface ClientIdArgs {
    name: ClientId,
}
