import { Client } from "../types";
import { Client as ClientModel} from "@mystoreaid/prisma-models";

export default async function clients (parent: any, args: Client): Promise<Client[]> {
    return ClientModel.findMany()
}