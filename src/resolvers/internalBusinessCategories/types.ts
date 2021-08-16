export interface InternalBusinessCategory {
    id: String,
    name: String,
    description: String,
    created_at: number,
    updated_at: number, 
    deleted: boolean,
}

export interface InternalBusinessCategoryIdArgs {
    id: String 
}
