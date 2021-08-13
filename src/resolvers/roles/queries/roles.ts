import { Role } from "../types";

export default async function roles (parent: any, args: Role, context: any): Promise<Role[]> {
    return context.prisma.roles.findMany();
}