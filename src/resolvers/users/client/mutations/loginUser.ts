import { LoginUserPayload, UserWithPassword, LoginResponse} from '../../types';
import UserModel from '../../UserModel';
import { passwordIsValid, signToken } from '../../helpers';
import UserAccess from '../../../../models/UserAccess';

export default async function loginUser(parent: any, args: LoginUserPayload): Promise<LoginResponse> | never{
    let user: UserWithPassword; 

    if (args.username) {
       
        user = await UserModel.findOneWhere({username: args.username});
    
        if (!user) {
            throw new Error(`There is no user with username ${args.username}`); 
        }

        if (user.status !== 'confirmed') {
            throw new Error(`User with username ${args.username} is not confirmed`);
        }

        if (user.password){

           
            
            const validUser: boolean = await passwordIsValid(args.password, user.password );
        
            if (validUser) {
                if (user.password) {
                    delete user.password;
                }
                const { userId } = user;
                const token = signToken(user, 24 * 7, 'hours');
                const result: {token: string, access?: any} = {token};
                const access = await UserAccess.findOneWhere({ userId: userId });
                if (access) {
                    result.access = access.access;
                }
                return result;
            }
            else {
                throw new Error("Invalid Password");

            }
        }
        else{
            throw new Error("User does not have password");
        }
         
    }

    throw new Error(`Login requires a username. No username was parsed`); 
} 
    