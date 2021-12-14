import { Audit } from "resolvers/audits/types";
import { Branch } from "../../resolvers/branches/types";
import { Product } from "../../resolvers/products/types";
import { User } from "../../resolvers/users/types";

export type BranchProductId = string;

export interface AdminFindBranchProductArgs  extends FindBranchProductsArgs {
    companyId: string
    userId: string
}

export interface AdminAssignBranchProduct extends AdminFindBranchProductArgs {
    productId: string
}

export interface AssignBranchProduct extends FindBranchProductsArgs {
    productId: string
}

export interface BranchProduct {
    id: BranchProductId
    productId: string
    branchId: string
    lowestStock: number
    quantity: number
    createdBy: String
    sellingPrice: number
    packs: [number]
    packList: JSON
    defaultPack: JSON
    hidden: boolean
    lastModifiedBy: String
    created_at: number
    updated_at: number
    last_modified: number
    server_created_at: number
    branches: Branch
    users_branches_products_createdByTousers: User
    users_branches_products_lastModifiedByTousers: User
    products: Product
}

export interface BranchProductsStock {
    id: string
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
    // branch_purchases: BranchPurchase   
    // branch_supplier_stocks: BranchSupplierStock
    branches_products_stocks_histories: BranchProductsStock 
    // stock_return_histories: StockReturnHistory
  }

export interface BranchProductsStocksHistory {
    id: string                  
    branchProductStockId: string                   
    quantity: number                   
    productId: String                  
    branchId: String                  
    deleted: Boolean                  
    created_at: number
    updated_at: number
    stockDate: number                   
    branchProductId: String                  
    createdBy: String                  
    last_modified: number
    lastModifiedBy: String                  
    server_created_at: number
    branches: Branch                 
    branches_products: BranchProduct     
    branches_products_stocks: BranchProductsStock  
    users_branches_products_stocks_histories_createdByTousers: User                   
    users_branches_products_stocks_histories_lastModifiedByTousers: User               
    products: Product               
  }

export interface FindBranchProductsArgs {
    branchId: string;
}

interface Ids {
    id: string
}

export interface RemoveHistoryArgs {
    branchId: string
    historyIds: Array<Ids>
}