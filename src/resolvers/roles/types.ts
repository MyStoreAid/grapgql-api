import { Permission } from "../../resolvers/permissions/types";

export type RoleId = string;

export interface Role {
    id: RoleId,
    name: String,
    description: String,
    created_at: number,
    updated_at: number, 
    deleted: boolean,
}

export interface RoleIdArgs {
    id: RoleId 
}

export interface RoleWithPermission extends Role {
    rolePermissions: any[]
}
