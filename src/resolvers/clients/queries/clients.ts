import { Client } from "../types";
import ClientModel from "../ClientModel";

export default async function clients (parent: any, args: Client, context: any): Promise<Client[]> {
    return ClientModel.findMany(context.prisma.clients)
}