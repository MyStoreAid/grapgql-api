export type SupplierId = string;

interface SalespersonArgs {
    firstName?: String,
    otherNames?: String,
    phone: String
}

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

export interface SupplierCompanyInput {
    branchId: string
    name: String
    phone: String
}

export interface SupplierSalespersonInput {
    branchId: string,
    supplierBranchId: string,
    supplierCompanyId: string,
    salesperson: SalespersonArgs

}



export interface SupplierIdArgs{
    id: SupplierId
}
