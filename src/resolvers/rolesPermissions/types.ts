import { Permission } from "resolvers/permissions/types"
export type RolesPermissionId = string

export interface RolesPermission {
    id: RolesPermission
    roleId: String
    permissionId: String
    created_at: number
    updated_at: number
    permission?: Permission
}