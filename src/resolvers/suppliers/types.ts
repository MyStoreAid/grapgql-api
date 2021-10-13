export type SupplierId = string;

export interface Supplier {
    id: SupplierId
    name: String
    phone: String
    email: String
    isTemporary: boolean
    createBy: String
    created_at: number
    updated_at: number
    dateAdded: number
    server_created_at: number
    last_modified: number
    lastModifiedBy: String
    createdBy: String
}

export interface SupplierIdArgs{
    id: SupplierId
}
