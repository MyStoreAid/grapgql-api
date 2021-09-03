import moment from 'moment';
import { User, UserIdArgs} from '../../types';
import UserModel from '../../UserModel';


export default async function updateUserAccessHistory(parent: any, args: UserIdArgs): Promise<User> | never{
    let existingUser: User;
    if(args.userId) {
        try {
            existingUser = await UserModel.findOneWhere({ userId: args.userId});
        }
        catch(error: any){
            throw Error(`There was an error finding User with User ID ${args.userId}`);
        }
        if(existingUser) {
            existingUser = await UserModel.updateOne(existingUser.userId, {
                lastLogin: moment(),
                logins: existingUser.logins ? existingUser.logins + 1 : 1
            });

            return existingUser;
        }

        throw new Error(`There exists no User with User ID ${args.userId}`);
    }

    throw new Error("User ID is required")

}