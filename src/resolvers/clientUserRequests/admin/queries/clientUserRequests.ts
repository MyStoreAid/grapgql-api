import { ClientUserRequest as ClientUserRequestModel } from "@mystoreaid/prisma-models";
import { ClientUserRequest } from "resolvers/clientUserRequests/types";

export default async function clientUserRequests(parent: any, args: any): Promise<Array<ClientUserRequest>> | never {
    const message: string = `client user requests`;

    try {
        const include: any = { users: true };
        const clientUserRequests: Array<ClientUserRequest> = await ClientUserRequestModel.findManyForeignKey(include);
        return clientUserRequests;
    }
    catch(error: any){
        throw new Error(`There was an error finding ${message}`);
    }
}