import { Client } from "../types";
import ClientModel from "../ClientModel";


export default async function updateClient (parent: any, args: Client, context: any) : Promise<Client> | never{
    let existingClient!: Client;
    const clientId: string = args.name;
    

    try {
        existingClient = await ClientModel.findOne(context.prisma.clients, clientId);
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching client with ID ${clientId}`);
    }

    if(!existingClient) {
        throw new Error(`There is no client with ID ${clientId}`);
    }

    return await ClientModel.updateOne(context.prisma.clients, clientId, args)
}