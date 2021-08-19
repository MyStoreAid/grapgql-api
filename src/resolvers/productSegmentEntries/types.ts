export type ProductSegmentEntryId = string;

export interface ProductSegmentEntry {
    id: ProductSegmentEntryId, 
    name: String,
    description: String,
    productSegmentId: String,
    created_at: number,
    updated_at: number,
    last_modified: number,
    server_created_at: number,
    deleted: boolean,

}

export interface ProductSegmentEntryIdArgs {
    id: ProductSegmentEntryId
}