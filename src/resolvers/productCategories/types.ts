export type ProductCategoryId = string;

export interface ProductCategory {
    id: ProductCategoryId,
    name: String,
    summary: String,
    parentId: String,
    measurementUnitId: String,
    created_at: number,
    updated_at: number,
    last_modified: number,
    server_created_at: number, 
    deleted: boolean,
}

export interface ProductCategoryIdArgs {
    id: ProductCategoryId
}
