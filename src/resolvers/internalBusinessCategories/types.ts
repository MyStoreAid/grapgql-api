export type InternalBusinessCategoryId = string;

export interface InternalBusinessCategory {
    id: InternalBusinessCategoryId,
    name: String,
    description: String,
    created_at: number,
    updated_at: number, 
    deleted: boolean,
}

export interface InternalBusinessCategoryIdArgs {
    id: InternalBusinessCategoryId 
}
