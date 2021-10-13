import { User as UserModel } from "@mystoreaid/prisma-models";
import { User, UserIdArgs } from "../../types";

export default async function user (parent: any, args: UserIdArgs): Promise<User> | never {
    let existingUser: User;

    try{
        existingUser = await UserModel.findOneWhere({ userId: args.userId});
    }
    catch(error: any) {
        throw new Error(`There was an error finding User with  User ID ${args.userId}`);
    }

    if(existingUser) {
        return existingUser;
    }

    throw new Error(`There existings no user with User ID ${args.userId}`);
}