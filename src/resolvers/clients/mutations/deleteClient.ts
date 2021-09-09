import { Client, ClientIdArgs } from "../types";
import { Client as ClientModel} from "@mystoreaid/prisma-models";

export default async function deleteClient (parent: any, args: ClientIdArgs): Promise<Client> | never {
    let existingClient!: Client;
    const clientId: string = args.name;

    try {
        existingClient = await ClientModel.findOne(clientId);
    } catch (error: unknown) {
        console.error(error);
        throw new Error(`There is an error fetching a client with ID ${clientId}`);
    }

    if(!existingClient) {
        throw new Error(`There is no client with ID ${clientId}`);
    }


    return await ClientModel.deleteOne(clientId)
}