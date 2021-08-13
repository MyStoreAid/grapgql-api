export interface Feature {
    id: String,
    name: String,
    description: String,
    created_at: number,
    updated_at: number, 
    deleted: boolean,
}

export interface FeatureIdArgs {
    id: String 
}
