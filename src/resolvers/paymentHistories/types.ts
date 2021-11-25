import { Branch } from "../../resolvers/branches/types";

export type PaymentHistoryId = string;

export interface PaymentHistoryPayload {
    userId: string
    companyId: string
    branchId: string
}

export interface CreatePaymentHistoryArgs extends PaymentHistoryPayload {
    paymentHistoryInfo: PaymentHistoryArgs

}

export interface DeletePaymentHistoryArgs extends PaymentHistoryPayload {
    paymentHistoryId: string
}

export interface PaymentHistory {
    id: PaymentHistoryId
    months: [String]
    datePaid: Date
    branchId: String 
    amountPaid: number   
    receipt: String  
    adminLastModifiedBy: String  
    deleted: Boolean  
    created_at: number
    updated_at: number
    paymentType: String
    description: String
    branches: Branch
}

interface PaymentHistoryArgs{
    months: [String]
    datePaid: Date
    branchId: String 
    amountPaid: number   
    receipt: String  
    adminLastModifiedBy: String  
    deleted: Boolean  
    created_at: number
    updated_at: number
    paymentType: String
    description: String
}

export interface UpdatePaymentHistoryArgs extends CreatePaymentHistoryArgs{
    paymentHistoryId: string
}