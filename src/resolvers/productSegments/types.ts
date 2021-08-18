export type ProductSegmentId = string;

export interface ProductSegment {
    id: ProductSegmentId, 
    name: String,
    description: String,
    created_at: number,
    updated_at: number,
    last_modified: number,
    server_created_at: number,
    deleted: boolean,

}

export interface ProductSegmentIdArgs {
    id: ProductSegmentId
}