import { Company } from "resolvers/companies/types";
import { Role } from "resolvers/roles/types";
import { User } from "resolvers/users/types";

export type UserCompanyId = string;

export interface UserCompanyPayload {
    companyId: string
    userId: string
}

export interface UserCompany {
    id: UserCompanyId
    userId: String
    companyId: String
    roleId: string
    addedPermissions: any
    excludedPermissions: any
    created_at: number
    updated_at: number
    companies: Company
    roles: Role
    users: User

}

export interface UserCompanyArgs {
    userId: string
    roleId: string
    companyData: companyData
}

interface companyData {
    name: string
    branchIds?: Array<Ids>
    userBranchIds?: Array<Ids>
    businessCategoryId: string
    subscriptionId: string
    email: string
    phone: string
    internalBusinessCategoryId: string
    adminLastModifiedBy: string
    lastModifiedBy: string
    lastSyncBy: string
}

interface Ids {
    id: string
}