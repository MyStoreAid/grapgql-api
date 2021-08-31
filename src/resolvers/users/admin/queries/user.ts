import UserModel from "../../UserModel";
import { User, UserIdArgs } from "../../types";

export default async function user (parent: any, args: UserIdArgs, context: any): Promise<User> | never {
    let existingUser: User;

    try{
        existingUser = await UserModel.findOneWhere(context.prisma.users, { userId: args.userId});
    }
    catch(error: any) {
        throw new Error(`There was an error finding User with  User ID ${args.userId}`);
    }

    if(existingUser) {
        return existingUser;
    }

    throw new Error(`There existings no user with User ID ${args.userId}`);
}