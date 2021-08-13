import { Client, ClientIdArgs } from "../types";
import TimeHelper from '../../../helpers/TimeHelper';

export default async function deleteClient (parent: any, args: ClientIdArgs, context: any): Promise<Client> | never {
    let existingClient!: Client;
    const ClientId: String = args.name;

    try {
        existingClient = await context.prisma.clients.findUnique({ where: {name: ClientId}});
    } catch (error: unknown) {
        console.error(error);
        throw new Error(`There is an error fetching a client with ID ${ClientId}`);
    }

    if(!existingClient) {
        throw new Error(`There is no client with ID ${ClientId}`);
    }


    return await context.prisma.clients.update({
        where: {
            name: args.name
        },
        data: {
            deleted : true,
            updated_at: TimeHelper.currentTime,

        }
    })
}