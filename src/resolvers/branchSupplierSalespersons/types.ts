export type BranchSupplierSalespersonId = string;

export interface BranchSupplierSalesperson {
    id: BranchSupplierSalespersonId                                     
    branchId: String                                       
    branchSupplierId: String                                       
    createdBy: String                                       
    deleted: boolean                                     
    created_at: number
    updated_at: number
    server_created_at: number
    last_modified: number
    hidden: boolean                                    
    employeeId: String                                     
    employeeName: String                                       
    employeeContact: String                                       
    lastModifiedBy: String                                    
    
}

export interface findBranchEmployeeArgs {
    branchId: String
}