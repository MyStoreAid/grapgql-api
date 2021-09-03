import { Client} from "../types";
import ClientModel from "../ClientModel";

export default async function createClient (parent: any, args: Client): Promise<Client> {
    return await ClientModel.createOne(args)
}