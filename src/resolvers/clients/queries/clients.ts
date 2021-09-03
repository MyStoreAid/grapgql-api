import { Client } from "../types";
import ClientModel from "../ClientModel";

export default async function clients (parent: any, args: Client): Promise<Client[]> {
    return ClientModel.findMany()
}