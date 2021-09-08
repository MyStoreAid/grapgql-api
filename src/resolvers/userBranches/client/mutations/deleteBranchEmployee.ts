import UserModel from "../../../../resolvers/users/UserModel";
import { DeleteBranchEmployeeArgs, Employee, UserBranch } from "../../types";
import UserBranchModel from "../../UserBranchModel";


export default async function deleteBranchEmployee (parent: any, args: DeleteBranchEmployeeArgs): Promise<Employee> | never {

    const userId: string = args.userId;
    const branchId: string = args.branchId;
    let userBranches: Array<UserBranch> = []
    let userBranch: UserBranch;
   

    const data: {condition: any, 
        include: {roles: boolean, branches: boolean, users: boolean}} = {
        condition: { AND: [ { branchId: branchId }, { userId: userId } ] }, 
        include: {
            roles: true,
            branches: true, 
            users: true,
        }
    };

    try{
        userBranches =  await UserBranchModel.findManyForeignKey(data);
    }
    catch(error: any){
        throw new Error(`There was an error Finding Employee with User ID ${userId} in Branch with ID ${branchId}`)
    }

  
    
    if(userBranches.length >  0) {

        //deletes user from user model
        try{
            await UserModel.deleteOne(userId);
        }
        catch(error: any) {
            throw new Error(`There was an Error deleting Employee with User ID ${userId}`);
        }

        //delete user branch relationship
        const id: string = userBranches[0].id;
        const include: any = {
            users: true,
            roles: true,

        }

        try{
            userBranch = await UserBranchModel.deleteOneForeignKey(id, include);
        }
        catch(error: any){
            throw new Error(`There was an Error deleting UserBranch relationship with ID ${id}`)
        }
       
        let employee: Employee = {
            userId: userBranch.users.userId,
            firstName: userBranch.users.firstName ,
            phone: userBranch.users.phone,
            email: userBranch.users.email,
            country: userBranch.users.country,
            otp: userBranch.users.otp,
            callingCode: userBranch.users.callingCode,
            username: userBranch.users.username,
            status: userBranch.users.status,
            logins: userBranch.users.logins,
        }

        return employee;
    }

    throw new Error(`There exists no Employee with UserID ${userId} in Branch with Branch ID ${branchId}`);

    
}