import { Client } from "../types";
import TimeHelper from '../../../helpers/TimeHelper';



export default async function updateClient (parent: any, args: Client, context: any) : Promise<Client> | never{
    let existingClient!: Client;
    const ClientId: String = args.name;
    const currentTime: number = TimeHelper.currentTime;

    try {
        existingClient = await context.prisma.clients.findUnique({ where: { name: ClientId } });
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching client with ID ${ClientId}`);
    }

    if(!existingClient) {
        throw new Error(`There is no client with ID ${ClientId}`);
    }

    return await context.prisma.clients.update({
        where: {
            name: ClientId
        },
        data: {
            displayName: args.displayName,
            updated_at: currentTime,

        }
    });
}