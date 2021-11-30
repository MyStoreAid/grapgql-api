import { Branch } from "../../resolvers/branches/types";
import { User } from "../../resolvers/users/types";

export type AppointmentId  = string;

export interface Appointment {
    id: AppointmentId
    type: String
    status: String
    createdBy: String
    last_modified: number
    lastModifiedBy: String
    assignedTo: String
    users_appointments_createdByTousers: User
    created_at: number
    updated_at: number
    server_created_at: number
    users_appointments_lastModifiedByTousers: User
    request: JSON
    users_appointments_assignedToTousers: User
    branches: [Branch]
    deleted: Boolean
}

export interface AppointmentArgs {
    type: String
    status: String
    createdBy: String
    last_modified: number
    lastModifiedBy: String
    assignedTo: String
    request: JSON
}

export interface AppointmentIdArgs {
    id: AppointmentId
}

export interface UpdateAppointmentArgs extends AppointmentArgs {
    id: AppointmentId
}