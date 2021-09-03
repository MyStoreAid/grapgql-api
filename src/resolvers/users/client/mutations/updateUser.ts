import { User} from '../../types';
import UserModel from '../../UserModel';

export default async function updateUser(parent: any, args: User): Promise<User> | never {
    let existingUser: User
    
    try {
        existingUser = await UserModel.findOneWhere({ userId: args.userId});
    }
    catch(error: any){
        throw new Error(`There was an error finding User with User ID ${args.userId}`);
    }

    if (existingUser.phone !== args.phone ) {
        throw new Error(`Invalid Phone number`);
    }

    if (existingUser) {
        const updateUser = await UserModel.updateOne(existingUser.userId, args);
        return updateUser;
    }
    throw new Error(`There exists no User with User ID ${args.userId}`);
 
    

}