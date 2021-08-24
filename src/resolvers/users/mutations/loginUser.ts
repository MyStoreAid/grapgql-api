import { User, loginUser} from '../types';
import UserModel from '../UserModel';
import loginToken from '../userHelpers/loginToken';
import TimeHelper from "../../../helpers/TimeHelper";

export default async function loginUser(parent: any, args: loginUser, context: any): Promise<User> | never{
    let user; 

    if (args.username) {
        try{
            user = await UserModel.findOneWhere(context.prisma.users, {username: args.username})
            

        } catch(error: unknown){
            throw new Error(`Username ${args.username} does not exist`);
        }

        const { password, status } = user;

        if(password === args.password) {
            if ( status === 'confirmed') {
                const token = loginToken(user, 24 * 7, 'hours')
                const { result } = token;


            }

        }
        

    

    }

    return user;

    
} 
    