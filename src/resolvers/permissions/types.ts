import { RolesPermission } from "../../resolvers/rolesPermissions/types";

export type PermissionId = string;

export interface Permission {
    id: PermissionId,
    name: String,
    description: String,
    created_at: number,
    updated_at: number, 
    deleted: boolean,
}

export interface AvailablePermissionArgs {
    roleId: string,
    branchId: string,
    employeeId: string
}

export interface AvailablePermission {
    rolePermissions: RolesPermission
    employeeAddedPermissions: Array<Permission>
    employeeExcludedPermissions: Array<Permission>
    availablePermissions: Permission | null
}

export interface PermissionIdArgs {
    id: PermissionId 
}
