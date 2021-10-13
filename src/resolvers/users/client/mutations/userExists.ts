import { User, UserExistsArgs, UserExistsResponse} from '../../types';
import { User as UserModel } from "@mystoreaid/prisma-models";


export default async function userExists(parent: any, args: UserExistsArgs): Promise<UserExistsResponse> | never{
    let user: User; 
    let existingUser: UserExistsResponse;
    const newPhone: String | undefined = args.phone !== undefined ? `${(args.phone.trim())}` : undefined;
    let message: String;

    if(args.username) {
        try {
            user = await UserModel.findOneWhere({ username: args.username });
            message = `User already exists with username ${user.username}`;
        }
        catch(error: unknown) {
            return { message: "User does not exist" , valid: true }
        }
    }
    else if(args.phone) {
        try{
            user = await UserModel.findOneWhere({ phone: newPhone });
            message = `User already exists with phone number ${user.phone}`
        }
        catch(error: unknown){
            return { message: "User does not exist" , valid: true }
        }
    }
    else {
        throw new Error(`Phone number / Username is required`);
    }

    
    existingUser = { message: message , valid: false }
    return existingUser;
   
} 
    