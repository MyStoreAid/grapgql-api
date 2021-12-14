import { Branch } from "../../resolvers/branches/types";
import { Customer } from "../../resolvers/customers/types";
import { User } from "../../resolvers/users/types";

export type branchCustomerId = string

export interface BranchCustomer {
    branchId: String    
    customerId: String
    deleted: Boolean   
    created_at: number
    updated_at: number
    id: String 
    createdBy: String
    last_modified: number
    lastModifiedBy: String
    server_created_at: number
    branches: Branch
    users_branches_customers_createdByTousers: User
    customer: Customer 
    users_branches_customers_lastModifiedByTousers: User
}

export interface FindCustomerArgs {
    userId: string
    branchId: string
    companyId: string
}