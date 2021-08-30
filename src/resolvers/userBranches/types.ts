export type userBranchId = string;

export interface UserBranch {
    id: userBranchId,
    userId: String,
    branchId: String,
    roleId: String,
    companyId: String,
    employeeTypeId: String
    main: String,
    status: String,
    customerCareId: String
    created_at: number,
    updated_at: number,
    server_created_at: number,
    last_modified: number,
    deleted: boolean,
}

export interface findBranchUserArgs {
    branchId: String,
}