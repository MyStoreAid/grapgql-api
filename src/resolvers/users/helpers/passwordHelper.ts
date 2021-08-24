import bcrypt from 'bcrypt';

export async function generateHash(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
}

export async function passwordIsValid(plainPassword: string, hash: string | undefined): Promise<boolean> {
    if (hash) {
     return bcrypt.compare(plainPassword, hash);
    }
    return false;
}