export type ProductDescriptionId = string;

export interface ProductDescription {
    id: ProductDescriptionId,
    name: String,
    summary: String,
    created_at: number,
    updated_at: number, 
    last_modified: number,
    server_created_at: number,
    deleted: boolean,
}

export interface ProductDescriptionIdArgs {
    id: ProductDescriptionId
}
