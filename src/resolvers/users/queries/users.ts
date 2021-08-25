import UserModel from "../UserModel";
import { User } from "../types";

export default async function users (parent: any, args: User, context: any): Promise<User[]> {
    return UserModel.findMany(context.prisma.users);
}