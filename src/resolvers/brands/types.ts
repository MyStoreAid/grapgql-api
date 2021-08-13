export interface Brand {
    id: String,
    name: String,
    created_at: number,
    updated_at: number,
    server_created_at: number,
    last_modified: number, 
    deleted: boolean,  
}

export interface BrandIdArgs {
    id: String 
}
