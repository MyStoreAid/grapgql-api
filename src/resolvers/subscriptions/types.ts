export type SubscriptionId = string;

export interface Subscription {
    id: SubscriptionId,
    name: String,
    description: String,
    numberOfBranches: number,
    created_at: number,
    updated_at: number, 
    companiesId: String,
    deleted: boolean,
}

export interface SubscriptionIdArgs {
    id: SubscriptionId
}
