export type PermissionId = string;

export interface Permission {
    id: PermissionId,
    name: String,
    description: String,
    created_at: number,
    updated_at: number, 
    deleted: boolean,
}

export interface PermissionIdArgs {
    id: PermissionId 
}
