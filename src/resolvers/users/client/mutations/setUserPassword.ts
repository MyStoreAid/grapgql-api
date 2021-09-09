import { generateHash } from '../../helpers';
import { SetUserPassword, RegisterUserResponse, User} from '../../types';
import { User as UserModel } from "@mystoreaid/prisma-models";


export default async function setUserPassword(parent: any, args: SetUserPassword): Promise<RegisterUserResponse> | never {

    let existingUser: User; 
    let newUser: RegisterUserResponse;
    let username: String | undefined;
    
    if (args.otp && args.userId){
        try{
            const condition: {AND: any } = {
                AND: [
                    { userId: args.userId },
                    { otp: args.otp }
                ]
            }
            existingUser = await UserModel.findOneWhere(condition);
            

        }
        catch(error: any){
            throw new Error(`There was an error finding User with User ID ${args.userId} and Otp ${args.otp}`);
        }

        if(existingUser){
            if(args.password) {
                let password: String = await generateHash(args.password);
                
                if(args.username.length > 2){
                    username = args.username;
                }

                const data: {username: String | undefined, password: String, status: String} = { username: username, password: password, status: "confirmed" };
                newUser = await UserModel.updateOne(existingUser.userId, data);
                return newUser;
            }
            throw new Error("Password Required");
        }
        throw new Error(`There exists no User with User ID ${args.userId}/ Otp ${args.otp}`);
    }

    throw new Error("Enter User ID and Otp");
    
} 
    