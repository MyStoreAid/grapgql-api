import { Branch } from "../../resolvers/branches/types";
import { Product } from "../../resolvers/products/types";
import { User } from "../../resolvers/users/types";

export type BranchProductId = string;

export interface AssignBranchProduct extends FindBranchProductsArgs {
    productId: string
}

export interface FindBranchProductsArgs {
    branchId: string;
}

export interface BranchProduct {
    id: BranchProductId
    productId: String
    branchId: String
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