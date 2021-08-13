import { Client } from "../types";

export default async function clients (parent: any, args: Client, context: any): Promise<Client[]> {
    return context.prisma.clients.findMany();
}