export type CustomerId = string;

export interface Customer {
    id: CustomerId, 
    firstName: String,
    otherNames: String,
    phone: String,
    email: String,
    location: String,
    isTemporary: boolean,
    type: String,
    createdById: String,
    lastModifiedById: String,
    branchesCustomerIds: String[],
    saleEntryIds: String[],
    saleInstallmentIds: String[],
    saleIds: String[],
    created_at: number,
    updated_at: number,
    server_created_at: number,
    last_modified: number,
    deleted: boolean,
}

export interface CustomerIdArgs {
    id: CustomerId
}