import { Branch } from "resolvers/branches/types";
import { User, UserId } from "resolvers/users/types";

export type CompanyId = string;

export interface Company {
    id: CompanyId,
    name: String,
    businessCategoryId: String,
    subscriptionId: String,
    email: String,
    phone: String,
    branch: Branch[],
    internalBusinessCategoryId: String,
    adminLastModifiedBy: String
    lastModifiedBy: String,
    lastSyncBy: String,
    created_at: number,
    updated_at: number,
    lastSyncAt: number,
    deleted: boolean,

}

export interface CompanyIdArgs{
    id: CompanyId
}

export interface ClientCreateCompanyArgs {
    company: Company,
    branch: Branch,
    goalIds?: String[],
    customerCareId: UserId,
    callerInstance: any
}

export interface ClientCreateCompanyResponse {
    user: User
    companies: Company[]
}
