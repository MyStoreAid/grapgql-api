import { Branch } from "../../resolvers/branches/types";
import { ProductCategory } from "../../resolvers/productCategories/types";
import { User } from "../../resolvers/users/types";

export type BranchProductCategoryId = string;

export interface BranchProductCategory {
    id: BranchProductCategoryId
    productCategoryId: String
    branchId: String
    created_at: number
    updated_at: number
    last_modified: number
    server_created_at: number
    deleted: Boolean
    lastModifiedBy: String
    branches: Branch
    users: User
    product_categories: ProductCategory
}

export interface BranchProductCategoriesArgs{
    branchId: string
}