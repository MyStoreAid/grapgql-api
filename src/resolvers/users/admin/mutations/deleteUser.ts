import { UserIdArgs, User } from "resolvers/users/types";
import { User as UserModel } from "@mystoreaid/prisma-models";

export default async function deleteUser(parent: any, args: UserIdArgs ): Promise <User>  | never{
    const userId: string = args.userId;
    console.log(userId);

    try {
        const existingUser = await UserModel.findOne(userId);

        if(existingUser) {
            try {
                const user: User = await UserModel.deleteOne(userId);
                return user
            }
            catch(error: any) {
                throw new Error(`There was an error deleting User with User ID ${userId}`);
            }
        }
        else {
            throw new Error (`There exists no user with User ID ${userId}`);
        }
    }
    catch(error: any) {
        throw new Error (`There was an error finding user with User ID ${error}`)
    }
}