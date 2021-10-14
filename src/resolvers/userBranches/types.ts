import { Branch } from "../../resolvers/branches/types";
import { RoleWithPermission, Role } from "../../resolvers/roles/types";
import { User } from "../../resolvers/users/types";


export type userBranchId = string;

export interface DeleteBranchArgs extends DeleteBranchEmployeeArgs {
    companyId: string
}

export interface DeleteBranchEmployeeArgs extends FindBranchEmployeeArgs {
    userId: string
}

export interface FindBranchEmployeeArgs {
    branchId: string
}

export interface Employee extends User {
    role?: RoleWithPermission
}

export interface UserBranch {
    id: userBranchId
    userId: string
    branchId: string
    roleId: String
    addedPermissionIds: Array<Ids>
    excludedPermissionIds: Array<Ids>
    companyId: String
    employeeTypeId: String
    main: String
    status: String
    customerCareId: String
    users: User
    roles: Role
    branches: Branch
    created_at: number
    updated_at: number
    server_created_at: number
    last_modified: number
    deleted: boolean
}

interface Ids {
    id: string
}

export interface UserCompanyBranchArgs{ 
    userId: string,
    companyId: string,
}

