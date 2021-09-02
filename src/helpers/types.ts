import { PrismaModelContext } from "types/prisma";

export interface CreateBranchContext {
    branchContext: PrismaModelContext
    branchUserGroupContext: PrismaModelContext
    appointmentContext: PrismaModelContext
}

export interface CashCustomerContext {
    branchCustomerContext: PrismaModelContext
    customerContext: PrismaModelContext
}

export interface CashSupplierContext {
    supplierContext: PrismaModelContext
    branchSupplierContext: PrismaModelContext
}

export interface CreateCompanyContext {
    companyContext: PrismaModelContext
    subscriptionContext: PrismaModelContext

}


export interface CustomerCareforNewBranchContext {
    userCompanyContext: PrismaModelContext
    userBranchContext: PrismaModelContext 
    userAccessContext: PrismaModelContext
    userContext: PrismaModelContext 
    roleContext: PrismaModelContext
}