export type UserId = string;

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