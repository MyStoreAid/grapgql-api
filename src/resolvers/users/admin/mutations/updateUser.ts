import { UpdateUserInfoPayload, User } from "resolvers/users/types";
import { User as UserModel } from "@mystoreaid/prisma-models";

export default async function updateUser(parent: any, args: UpdateUserInfoPayload): Promise <User>  | never{
    const userId: string = args.userId;

    try {
        const existingUser = await UserModel.findOne(userId);

        if(existingUser) {
            const data: any = JSON.parse(JSON.stringify(args.userInfo));
          
            try {
                const user: User = await UserModel.updateOne(userId, data);
                return user;
            }
            catch(error: any) {
                throw new Error (`There was an error updating User with User ID ${userId}`);
            }
            
        }
        else {
            throw new Error (`There exists no user with User ID ${userId}`);
        }
    }
    catch(error: any) {
        throw new Error (`There was an error finding user with User ID ${userId}`)
    }
}