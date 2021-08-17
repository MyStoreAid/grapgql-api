export type FeatureId = string;

export interface Feature {
    id: FeatureId,
    name: String,
    description: String,
    created_at: number,
    updated_at: number, 
    deleted: boolean,
}

export interface FeatureIdArgs {
    id: FeatureId 
}
