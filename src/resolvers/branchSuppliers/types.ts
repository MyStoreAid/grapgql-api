export type BranchSupplierId = string;

export interface BranchSupplier {
    id: BranchSupplierId,                                      
    branchId: string                                       
    deliveryDays: String                                       
    createdBy: string                                       
    deleted: boolean                                     
    created_at: number
    updated_at: number
    server_created_at: number
    last_modified: number
    dateAdded: number
    hidden: boolean                                                                         
    branchName: String                                       
    branchContact: String                                       
    lastModifiedBy: String  
    supplierId: String
}