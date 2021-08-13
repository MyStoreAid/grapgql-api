export interface MeasurementUnit {
    id: String,
    name: String,
    symbol: String,
    created_at: number,
    updated_at: number, 
    last_modified: number,
    server_created_at: number,
    deleted: boolean,
}

export interface MeasurementUnitIdArgs {
    id: String 
}
