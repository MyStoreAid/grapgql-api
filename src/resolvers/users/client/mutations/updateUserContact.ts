import SMSService from 'services/SMSService';
import generateOtp from '../../helpers/generateOtp';
import { updateUserContactArgs, RegisterUserResponse} from '../../types';
import UserModel from '../../UserModel';


export default async function updateUserContact(parent: any, args: updateUserContactArgs, context: any): Promise<RegisterUserResponse> | never {
    let existingUser: RegisterUserResponse;

    if(args.phone){
        try{
            existingUser = await UserModel.findOneWhere(context.prisma.users, {userId: args.userId});
        }
        catch(error: any){
            throw new Error(`There was an error getting User with User ID ${args.userId}`);
        }

        if(existingUser) {
            const otp: String = process.env.NODE_ENV === 'test' ? '8989' : generateOtp();
            const message: String = `Hello ${existingUser.username}, your verification code is ${otp}. Please enter it`;

            await UserModel.updateOne(context.prisma.users, existingUser.userId, { phone: args.phone, otp: otp});

            let sentSMS: boolean = process.env.NODE_ENV === 'test' ? true : await new SMSService(existingUser.phone, message).sendMessage();

            if (sentSMS) {
                return existingUser;
            }
            throw new Error("An error was encountered during Otp resend");
        }
        throw new Error(`There exists no User with User ID ${args.userId}`);
    }

    throw new Error("New phone number required");


    return existingUser;

    
    
} 
    