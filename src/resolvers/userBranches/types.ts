import { Company } from "resolvers/companies/types";
import { Branch } from "../../resolvers/branches/types";
import { RoleWithPermission, Role } from "../../resolvers/roles/types";
import { User } from "../../resolvers/users/types";

export type userBranchId = string;

export interface AssignUserBranchArgs {
    userId: string
    companyId: string
    branchId: string
    roleId?: string
    isCustomerCarePersonnel: boolean
}

export interface UpdateUserBranchArgs {
    userId: string
    companyId: string
    branchId: string
    branchInfo: BranchInfoArgs
}

interface BranchInfoArgs {
    name: String
    startDate: number
    address: String
    location: String
    logo: String
    phone: String
    whatsAppPhone: String
    type: String
    checkoutSales: boolean
    aggregateSales: boolean
    action: String
    syncInterval: number
    alwaysSync: boolean
    forTesting: boolean
    gps: gps
    latitude: number
    longitude: number
    country: String
    region: String
    city: String
    supplierStock: boolean
    workingDays: String
    sourcesOfPurchases: String
    phoneType: String
    otherServices: String
    locationType: String
    storeImage: String
    serviceType: String
    buildingStructure:String
    coolerBrands: String
    coolerTypes: String
    electricity: String
    yearOfEstablishment: number
    appointmentId: String
    branchUserGroupId: String
    businessCategoryId: String
    companyId: string
    branchProductCategoryIds: String[]
    branchUserIds: String[]
    created_at: number
    updated_at: number
    deleted: boolean
}

export interface CustomerCarePersonnelIdArgs {
    customerCareId: string
}

export interface DeleteBranchArgs extends DeleteBranchEmployeeArgs {
    companyId: string
}

export interface DeleteBranchEmployeeArgs extends FindBranchEmployeeArgs {
    userId: string
}

export interface Employee extends User {
    role?: RoleWithPermission
}

export interface FindBranchEmployeeArgs {
    branchId: string
}

interface gps {
    lat: number
    lng: number
}

interface Ids {
    id: string
}

export interface SetCustomerCarePersonnelArgs extends FindBranchEmployeeArgs{
    userId: string
}

export interface UserBranch {
    id: userBranchId
    userId: string
    branchId: string
    roleId: string
    addedPermissionIds: Array<Ids>
    excludedPermissionIds: Array<Ids>
    companyId: String
    employeeTypeId: String
    main: String
    status: String
    customerCareId: String
    companies: Company
    users: User
    roles: Role
    branches: Branch
    created_at: number
    updated_at: number
    server_created_at: number
    last_modified: number
    deleted: boolean
}

export interface UserBranchResponse extends Branch {
    roles: Role
    user_branches: UserBranch
}



export interface UserCompanyBranchArgs{ 
    userId: string,
    companyId: string,
}

export interface UserIdArgs {
    userId: string
}

export interface UserRole {
    user: User
    role: Role
}
