import { Client} from "../types";
import ClientModel from "../ClientModel";

export default async function createClient (parent: any, args: Client, context: any): Promise<Client> {
    return await ClientModel.createOne(context.prisma.clients, args)
}