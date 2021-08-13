export interface ProductCategory {
    id: String,
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
    id: String 
}
