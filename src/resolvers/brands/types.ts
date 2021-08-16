export type BrandId = string;
export interface Brand {
    id: BrandId,
    name: String,
    created_at: number,
    updated_at: number,
    server_created_at: number,
    last_modified: number, 
    deleted?: boolean,  
}
export interface BrandIdArgs {
    id: BrandId
}
