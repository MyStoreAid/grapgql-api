export type UserId = String;

export interface RegisterUserResponse {
    id: UserId,
    phone: String,
    email: String,
    country: String,
    otp: String,
    callingCode: String,
    username: String,
}
export interface RegisterUserPayload extends RegisterUserResponse {
    password: String,
}