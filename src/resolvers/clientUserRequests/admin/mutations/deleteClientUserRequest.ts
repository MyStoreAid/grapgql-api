import { ClientUserRequest as ClientUserRequestModel } from "@mystoreaid/prisma-models";
import { ClientUserRequest, ClientUserRequestIdArgs } from "resolvers/clientUserRequests/types";

export default async function deleteClientUserRequest(parent: any, args: ClientUserRequestIdArgs): Promise<ClientUserRequest> | never {
    const clientUserRequestId: string = args.id;
    const message: string = `client user request with ID ${clientUserRequestId}`;
    let existingClientUserRequest: ClientUserRequest;

    try {
        existingClientUserRequest = await ClientUserRequestModel.findOne(clientUserRequestId);
    }
    catch(error: any){
        throw new Error(`There was an error finding ${message}`);
    }

    if(existingClientUserRequest){
        try {
            const include: any = { users: true };
            const clientUserRequest: ClientUserRequest = await ClientUserRequestModel.deleteOneForeignKey(clientUserRequestId, include);
            return clientUserRequest;
        }
        catch(error: any){
            throw new Error(`There was an error updating ${message}`);
        }
    }
    else {
        throw new Error(`There exists no ${message}`);
    }


}