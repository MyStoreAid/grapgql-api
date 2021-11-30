import { ClientUserRequest as ClientUserRequestModel } from "@mystoreaid/prisma-models";
import { ClientUserRequest, ClientUserRequestIdArgs } from "resolvers/clientUserRequests/types";

export default async function clientUserRequest(parent: any, args: ClientUserRequestIdArgs): Promise<ClientUserRequest> | never {
    const clientUserRequestId: string = args.id;
    const message: string = `client user request with ID ${clientUserRequestId}`;

    try {
        const include: any = { users: true };
        const clientUserRequest: ClientUserRequest = await ClientUserRequestModel.findOneForeignKey(clientUserRequestId, include);
        return clientUserRequest;
    }
    catch(error: any){
        throw new Error(`There was an error finding ${message}`);
    }
}