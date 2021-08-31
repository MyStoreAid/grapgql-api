import {UserWithPassword, VerifyUserPayload, VerifyUserResponse, User} from '../../types';
import UserModel from '../../UserModel';
import { signToken } from '../../helpers';

export default async function verifyUser(parent: any, args: VerifyUserPayload, context: any): Promise<VerifyUserResponse> | never{
    let user: User;
    const {phone, otp} = args;

    try {
        user = await UserModel.findOneWhere(context.prisma.users, {
            phone,
            otp
        });

        if (!user) {
            throw new Error(`Wrong OTP. Please try again`);
        }

        const updatedUser: UserWithPassword = await UserModel.updateOne(context.prisma.users, user.userId, {
            status: 'confirmed'
        });

        if (updatedUser) {
            const token = signToken(updatedUser, 24 * 7, 'hours');

            return {token};
        }

        throw new Error(`Error updating user`);
    } catch (e) {
        throw new Error(`Could not verify user`);
    }
}
