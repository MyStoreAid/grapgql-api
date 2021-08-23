export type CompanyId = string;

export interface Company {
    id: CompanyId,
    name: String,
    businessCategoryId: String,
    subscriptionId: String,
    email: String,
    phone: String,
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
