import { LoginUserPayload, UserWithPassword, LoginResponse} from '../types';
import UserModel from '../UserModel';
import { passwordIsValid, signToken } from '../helpers';
import UserAccess from '../../../models/UserAccess';

export default async function loginUser(parent: any, args: LoginUserPayload, context: any): Promise<LoginResponse> | never{
    let user: UserWithPassword; 

    if (args.username) {
        try{
            user = await UserModel.findOneWhere(context.prisma.users, {username: args.username});
            if (!user) {
                throw new Error(`There is no user with username ${args.username}`); 
            }

            if (user.status !== 'confirmed') {
                throw new Error(`User with username ${args.username} is not confirmed`);
            }

            const validUser: boolean = await passwordIsValid(args.password, user.password);
            if (validUser) {
                if (user.password) {
                    delete user.password;
                }
                const { userId } = user;
                const token = signToken(user, 24 * 7, 'hours');
                const result: {token: string, access?: any} = {token};
                const access = await UserAccess.findOne(context.prisma.user_access, userId);
                if (access) {
                    result.access = access.access;
                }
                return result;
            }

        } catch(error: unknown){
            throw new Error(`There was an error finding user with username ${args.username}`);
        }
    }

    throw new Error(`Login requires a username. No username was parsed`); 
} 
    