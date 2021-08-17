export type ManufacturerId = string;

export interface Manufacturer {
    id: ManufacturerId,
    name: String,
    created_at: number,
    updated_at: number,
    isTemporary: boolean,
    last_modified: boolean,
    server_created_at: number,
    deleted: boolean,
}

export interface ManufacturerIdArgs {
    id: ManufacturerId
}
