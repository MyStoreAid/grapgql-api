export interface Permission {
    id: String,
    name: String,
    description: String,
    created_at: number,
    updated_at: number, 
    deleted: boolean,
}

export interface PermissionIdArgs {
    id: String 
}
