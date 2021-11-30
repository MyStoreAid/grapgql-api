import { Branch } from "../../resolvers/branches/types";
import { User } from "../../resolvers/users/types";

export type CashflowId = string;

export interface Cashflow {
    id: CashflowId              
    amount: number              
    type: String
    categoryId: String              
    branchId: String              
    status: String
    createdBy: String              
    statusChangedBy: String             
    dateAdded: number
    username: String              
    deleted: Boolean             
    created_at: number
    updated_at: number
    last_modified: number
    lastModifiedBy: String             
    server_created_at: number
    branches: Branch            
    // cashflow_categories: CashflowCategory 
    users_cashflows_createdByTousers: User               
    users_cashflows_lastModifiedByTousers: User             
    users_cashflows_statusChangedByTousers: User               
}

export interface CashflowArgs {             
    amount: number              
    type: String
    categoryId: String              
    branchId: String              
    status: String
    createdBy: String              
    statusChangedBy: String             
    dateAdded: number
    username: String                         
    lastModifiedBy: String                        
  }

export interface FindBranchCashFlows {
    userId: string
    companyId: string
    branchId: string
}

export interface UpdateBranchCashflow extends FindBranchCashFlows {
    cashflowId: string
    CashflowArgs: CashflowArgs

}