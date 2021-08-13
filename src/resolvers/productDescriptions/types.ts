export interface ProductDescription {
    id: String,
    name: String,
    summary: String,
    created_at: number,
    updated_at: number, 
    last_modified: number,
    server_created_at: number,
    deleted: boolean,
}

export interface ProductDescriptionIdArgs {
    id: String 
}
