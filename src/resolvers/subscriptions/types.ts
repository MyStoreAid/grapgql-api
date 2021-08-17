import { Company } from "resolvers/companies/types";

export interface Subscription {
    id: String,
    name: String,
    description: String,
    numberOfBranches: number,
    created_at: number,
    updated_at: number, 
    companiesId: String,
    deleted: boolean,
}

export interface SubscriptionIdArgs {
    id: String 
}
