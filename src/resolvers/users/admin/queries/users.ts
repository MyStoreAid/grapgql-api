import { User as UserModel } from "@mystoreaid/prisma-models";
import { User } from "../../types";

export default async function users (parent: any, args: User): Promise<User[]> {
    return UserModel.findMany();
}