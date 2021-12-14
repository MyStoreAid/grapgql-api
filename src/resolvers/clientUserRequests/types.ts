import { User } from "../users/types";

export type ClientUserRequestId = string;

export interface ClientUserRequest extends ClientUserRequestArgs {
    id: ClientUserRequestId
    deleted: Boolean 
    created_at: number
    updated_at: number
    users: User 
}

export interface ClientUserRequestArgs {
    type: String 
    request: JSON 
    lastModifiedBy: String
    status: String  
}

export interface ClientUserRequestIdArgs {
  id: ClientUserRequestId
}

export interface UpdateClientUserRequestArgs extends ClientUserRequestArgs {
  id: ClientUserRequestId
}
