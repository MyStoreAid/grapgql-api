export type MeasurementUnitId = string;

export interface MeasurementUnit {
    id: MeasurementUnitId,
    name: String,
    symbol: String,
    created_at: number,
    updated_at: number, 
    last_modified: number,
    server_created_at: number,
    deleted: boolean,
}

export interface MeasurementUnitIdArgs {
    id: MeasurementUnitId
}
