import { ClientUserRequest as ClientUserRequestModel } from "@mystoreaid/prisma-models";
import { ClientUserRequest, UpdateClientUserRequestArgs } from "resolvers/clientUserRequests/types";

export default async function updateClientUserRequest(parent: any, args: UpdateClientUserRequestArgs): Promise<ClientUserRequest> | never {
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
        const data: any = JSON.parse(JSON.stringify(args));
        delete data.id;

        try {
            const include: any = { users: true };
            const params: { data: any, include: any} = { data: data, include: include}
            const clientUserRequest: ClientUserRequest = await ClientUserRequestModel.updateOneForeignKey(clientUserRequestId, params);
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