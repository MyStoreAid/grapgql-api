export type UserId = string;

export interface User {
    id: UserId,
    phone: String,
    email: String,
    country: String,
    otp: String,
    callingCode: String,
    username: String,
}

export interface loginUser {
    username: String
    password: String
}

export interface registerUser {
    id: UserId,
    password: String,
    phone: String,
    email: String,
    country: String,
    otp: String,
    callingCode: String,
    username: String,
}

