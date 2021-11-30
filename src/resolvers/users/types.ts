export type UserId = string;

export interface FindCustomerCarePersonnel {
    userId: string
    branchId: string
    companyId: string
}
export interface LoginUserPayload {
    username: string
    password: string
}

export interface LoginResponse {
    token: string
    access?: any
}

export interface VerifyUserResponse {
    token: string
}

export interface RegisterUserResponse {
    userId: UserId
    phone: String
    email: String
    country: String
    otp: String
    callingCode: String
    username: String
}

export interface RegisterUserPayload {
    userId: String
    phone: String
    email?: String
    country: String
    otp: String
    firstName?: String,
    otherNames: String,
    status?: String
    password?: string
    callingCode: String
    username?: String
}
export interface SetUserPassword extends RegisterUserPayload {
    userId: UserId
    username: String

}

export interface updateUserContactArgs extends UserIdArgs {
    phone: String;
}

export interface UpdateUserInfoPayload {
    userId: UserId
    userInfo: UserInfo
}
    
interface UserInfo {
    email: String
    firstName: String
    otherNames: String
    phone: String
    username: String
    gender: String
    whatsAppPhone: String
    status: String
    otp: String
    isCustomerCarePersonnel: Boolean
    isSupervisor: Boolean
    adminLastModifiedBy: String
    lastModifiedBy: String
    country: String
    languagesSpoken: String
    logins: number
    lastLogin: number
    isRecruiter: Boolean
}

export interface User {
    userId: UserId,
    firstName: String,
    phone: String,
    email: String,
    country: String,
    otp: String,
    callingCode: String,
    username: String,
    status: String,
    logins: number,
    isCustomerCarePersonnel?: Boolean
    isSupervisor?: Boolean
    isRecruiter?: Boolean
}

export interface UserWithPassword extends User {
    password: string | undefined
}

export interface UserIdArgs {
    userId: UserId
}

export interface UserExistsArgs {
    username: String
    phone: String,
}

export interface UserExistsResponse {
    message: String,
    valid: boolean,
}

export interface VerifyUserPayload {
    otp: string
    phone: string
}
