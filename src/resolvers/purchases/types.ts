import { Audit } from "../../resolvers/audits/types";
import { Branch } from "../../resolvers/branches/types";
import { Product } from "../../resolvers/products/types";
import { User } from "../../resolvers/users/types";
import { ProductCategory } from "../../resolvers/productCategories/types";

export type branchProductsStockId = string;

export interface BranchProductsStock {
    id: branchProductsStockId
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
    // branches_products: BranchProduct
    users_branches_products_stocks_createdByTousers: User   
    users_branches_products_stocks_lastModifiedByTousers: User
    products: Product 
    // branch_purchases: BranchPurchase   
    // branch_supplier_stocks: BranchSupplierStock
    // branches_products_stocks_histories: BranchProductsStock 
    // stock_return_histories: StockReturnHistory
}

export interface FindPurchaseArgs {
    userId: string
    branchId: string
    companyId: string
}

export interface Purchase {
    branch_products_stocks: BranchProductsStock
    products: Product
    product_categories: ProductCategory
}

