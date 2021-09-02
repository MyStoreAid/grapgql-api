export type RoleId = string;

export interface Role {
    id: RoleId,
    name: String,
    description: String,
    permissions: String[],
    created_at: number,
    updated_at: number, 
    deleted: boolean,
}

export interface RoleIdArgs {
    id: RoleId 
}
