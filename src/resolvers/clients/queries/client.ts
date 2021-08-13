import { Client, ClientIdArgs } from "../types";

export default async function client (parent: any, args: ClientIdArgs, context: any): Promise<Client> | never {
    let result!: Client;
    const clientId: String = args.name;

    try {
        result = await context.prisma.clients.findUnique({
            where: {
                id: clientId
            }
        });
    } catch (error: unknown) {
        new Error(`There was an error getting client with ID ${clientId}.`);
    }

    if (!result) {
        new Error(`There is no client with ID ${clientId}.`);
    }


    return result;

}