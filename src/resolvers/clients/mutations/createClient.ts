import { Client} from "../types";
import { Client as ClientModel} from "@mystoreaid/prisma-models";

export default async function createClient (parent: any, args: Client): Promise<Client> {
    return await ClientModel.createOne(args)
}