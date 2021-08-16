export interface Manufacturer {
    id: String,
    name: String,
    created_at: number,
    updated_at: number,
    isTemporary: boolean,
    last_modified: boolean,
    server_created_at: number,
    deleted: boolean,
}

export interface ManufacturerIdArgs {
    id: String 
}
