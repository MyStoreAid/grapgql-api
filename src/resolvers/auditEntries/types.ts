import { Audit } from "../../resolvers/audits/types";
import { Branch } from "../../resolvers/branches/types";
import { BranchProduct } from "../../resolvers/branchesProducts/types";
import { Product } from "../../resolvers/products/types";
import { User } from "../../resolvers/users/types";

export type AuditEntryId = string;

export interface AuditEntry {
    id: AuditEntryId         
    branchId: String            
    productId: String            
    auditId: String            
    branchProductId: String            
    quantityCounted: number            
    storeQuantity: number            
    sellingPrice: number            
    costPrice: number            
    deleted: Boolean           
    created_at: number
    updated_at: number
    last_modified: number
    lastModifiedBy: String           
    server_created_at: number
    createdBy: String           
    isBalanced: Boolean
    auditDate: number
    audits: Audit             
    branches: Branch           
    branches_products: BranchProduct 
    users_audit_entries_createdByTousers: User           
    users_audit_entries_lastModifiedByTousers: User        
    products: Product           
}

export interface FindAuditEntriesArgs {
    auditId: string
}
