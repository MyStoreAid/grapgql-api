import { Branch } from "resolvers/branches/types";
import { Company } from "resolvers/companies/types";
import { User } from "resolvers/users/types";

export type customerCareScheduleId = string;

export interface CustomerCareSchedule {
    id: customerCareScheduleId
    userId: string
    companyId: String
    reason: String
    appointmentTime: number
    interviewerFullName: String
    branchName: String
    lastModifiedBy: String
    createdBy: String
    status: String
    comments: String
    branches: Branch
    companies: Company
    users_customer_care_schedules_createdByTousers: User
    users_customer_care_schedules_lastModifiedByTousers: User
    users_customer_care_schedules_userIdTousers: User
    created_at: number
    updated_at: number
    server_created_at: number
    last_modified: number
    deleted: Boolean
}

export interface CustomerCareSchedulePayload {
    userId: string
    scheduleType: string
}