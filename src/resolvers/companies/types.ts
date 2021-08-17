import { BusinessCategory } from "resolvers/businessCategories/types";
import { Subscription } from "resolvers/subscriptions/types";

export interface Company {
    id: String,
    name: String,
    businessCategory: BusinessCategory,
    subscription: Subscription,
    email: String,
    phone: String,
    created_at: number,
    updated_at: number,
    lastSyncAt: number,
    deleted: number,
}

export interface CompanyIdArgs {
    id: String 
}
