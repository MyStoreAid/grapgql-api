import { User, UserIdArgs } from "../../types";
import { User as UserModel } from "@mystoreaid/prisma-models";
import jwt from "jsonwebtoken";
import { signToken } from "../../helpers";

export default async function refreshToken(parent: any, args: UserIdArgs, context: any, info: any): Promise<String> | never {
    let user: User;
    const { req }: any = context;
   
    
    if (args.userId) {
        try{
            user = await UserModel.findOneWhere({ userId: args.userId});
        }
        catch(error: any){
            throw new Error(`There exists no user with User ID ${args.userId}`);
        }

        if (user.status === 'confirmed') {
                
            const expiredToken: String = req.headers.authorization;
            

            if (process.env.jwtSecret){

                const decoded: string | jwt.JwtPayload = jwt.verify( 
                    expiredToken.replace("Bearer", '').trim(),
                    process.env.jwtSecret,
                    { ignoreExpiration: true});
                
                if (typeof decoded !== 'string') {
                    if (decoded.data.userId === user.userId){
                        return signToken(decoded.data, 10, 'minutes');
                    }
                    throw new Error(`Token does not belong to user with User ID ${user.userId}`);
                }
                else {
                    throw new Error("Unable to refresh token");
                }
            }
            else {
                throw new Error("Invalid secret key")
            }                

        }
        else {
            throw new Error(`User with User ID ${args.userId} is not verified`)
        }

    }

    throw new Error("User ID is required");
    
}