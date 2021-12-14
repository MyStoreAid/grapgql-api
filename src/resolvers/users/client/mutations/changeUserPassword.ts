import { User as UserModel } from "@mystoreaid/prisma-models";
import { generateHash, passwordIsValid } from "../../../../resolvers/users/helpers";
import { User, ChangeUserPassword, UserWithPassword } from "../../types";

export default async function changeUserPassword(parent: any, args: ChangeUserPassword): Promise<User> | never {
    const userId: string = args.userId;
    const password: string = args.password;
    const newPassword: string = args.newPassword;
    const message: string = `User with User ID ${userId}`;
    let existingUser: UserWithPassword;

    try {
        existingUser = await UserModel.findOne(userId);
    }
    catch(error: any) {
        throw new Error(`There exists no ${message}`)
    }

    if(existingUser) {
        const confirmation = await passwordIsValid(password, existingUser.password);
        if(confirmation) {
            const newPasswordHash = await generateHash(newPassword);
            try {
                const updatedUser: User = await UserModel.updateOne(userId, { password: newPasswordHash } );
                return updatedUser;
            }
            catch(error: any) {
                throw new Error(`There was an error updating ${message}`);
            }
        }
    }

    throw new Error(`There exists no ${message}`);
    
}