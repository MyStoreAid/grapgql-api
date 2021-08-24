export type UserId = string;

export interface User {
    userId: UserId,
    phone: String,
    email: String,
    country: String,
    otp: String,
    callingCode: String,
    username: String,
    status: String,
}

export interface UserWithPassword extends User {
    password: string | undefined
}

export interface LoginUserPayload {
    username: string
    password: string
}
export interface LoginResponse {
    token: string,
    access?: any
}

export interface RegisterUserResponse {
    userId: UserId,
    phone: String,
    email: String,
    country: String,
    otp: String,
    callingCode: String,
    username: String,
}

export interface RegisterUserPayload {
    phone: String,
    email?: String,
    country: String,
    otp: String,
    callingCode: String,
    username?: String,
}
