import { Permission } from "../types";

export default async function permissions (parent: any, args: Permission, context: any): Promise<Permission[]> {
    return context.prisma.permissions.findMany();
}