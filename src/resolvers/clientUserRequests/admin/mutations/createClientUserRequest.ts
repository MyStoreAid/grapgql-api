import { ClientUserRequest as ClientUserRequestModel } from "@mystoreaid/prisma-models";
import { ClientUserRequest, ClientUserRequestArgs } from "resolvers/clientUserRequests/types";

export default async function createClientUserRequest(parent: any, args: ClientUserRequestArgs): Promise<ClientUserRequest> | never {
    const message: string = `client user request`;

    try {
        const include: any = { users: true };
        const params: { data: ClientUserRequestArgs, include: any} = { data: args, include: include };
        const clientUserRequest: ClientUserRequest = await ClientUserRequestModel.createOneForeignKey(params);
        return clientUserRequest;
    }
    catch(error: any){
        throw new Error(`There was an error creating ${message}`);
    }
}