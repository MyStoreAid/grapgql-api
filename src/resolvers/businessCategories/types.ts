export type BusinessCategoryId = string;

export interface BusinessCategory {
    id: BusinessCategoryId,
    name: String,
    description: String,
    created_at: number,
    updated_at: number, 
    deleted: boolean,
}

export interface BusinessCategoryIdArgs {
    id: BusinessCategoryId, 
}
