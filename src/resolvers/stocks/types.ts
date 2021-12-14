import { Audit } from "resolvers/audits/types";
import { Branch } from "resolvers/branches/types";
import { BranchProduct } from "resolvers/branchesProducts/types";
import { Product } from "resolvers/products/types";
import { User } from "resolvers/users/types";

export type BranchProductsStockId = string;

export interface FindStockArgs {
    userId: string
    branchId: string
    companyId: string
}

export interface RemoveStockDuplicatesArgs extends FindStockArgs {
    action: string
}

export interface BranchProductsStock {
    id: BranchProductsStockId
    productId: String
    branchId: String  
    quantity: number
    costPrice: number
    deleted:  Boolean   
    created_at: number
    updated_at: number
    stockDate: number
    branchProductId: String   
    branchSupplierOrderId: String   
    createdBy: String   
    type: String
    paymentSource: String
    auditId: String   
    last_modified: number
    lastModifiedBy: String   
    server_created_at: number
    expiryDate: number
    batchNumber: String   
    audits: Audit   
    branches: Branch 
    branches_products: BranchProduct
    users_branches_products_stocks_createdByTousers: User   
    users_branches_products_stocks_lastModifiedByTousers: User
    products: Product 
    // # branch_purchases: BranchPurchase   
    // # branch_supplier_stocks: BranchSupplierStock
    // # branches_products_stocks_histories: BranchProductsStock 
    // # stock_return_histories: StockReturnHistory
  }