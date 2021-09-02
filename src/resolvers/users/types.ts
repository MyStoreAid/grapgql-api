export type UserId = string;


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
