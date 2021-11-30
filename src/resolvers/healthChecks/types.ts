import { User } from "resolvers/users/types";

export type HealthCheckId = string;

export interface HealthCheckArgs {
    userId: String  
    status: String 
    action: String 
  }

export interface HealthCheck extends HealthCheckArgs {
    id: HealthCheckId 
    deleted: Boolean 
    created_at: number
    updated_at: number
    localInfo:  JSON
    users:      User    
}

export interface HealthCheckIdArgs {
    id: HealthCheckId
}

export interface UpdateHealthCheckArgs extends HealthCheckArgs {
    id: HealthCheckId
}