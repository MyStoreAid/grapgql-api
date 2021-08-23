export type SaleId = string;

export interface Sale {
    id: SaleId,
    note: String,
    paymentStatus: String,
    discount: number,
    salesDate: number,
    receiptNumber: String,
    type: String,
    paymentType: String,
    auditId: String,
    branchId: String,
    createdById: String,
    customerId: String,
    lastModifiedById: String,
    saleEntryIds: String[],
    saleInstallmentId: String[],
    saleReturnHistories: String[],
    created_at: number,
    updated_at: number,
    last_modified: number,
    server_created_at: number,
    deleted: boolean
}

export interface SaleIdArgs {
    id: SaleId
}