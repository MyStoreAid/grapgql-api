import { Client, ClientIdArgs } from "../types";
import { Client as ClientModel} from "@mystoreaid/prisma-models";

export default async function client (parent: any, args: ClientIdArgs): Promise<Client> | never {
    let result!: Client;
    const clientId: string = args.name;

    try {
        result = await ClientModel.findOne(clientId)
    } catch (error: unknown) {
        new Error(`There was an error getting client with ID ${clientId}.`);
    }

    if (!result) {
        new Error(`There is no client with ID ${clientId}.`);
    }


    return result;

}