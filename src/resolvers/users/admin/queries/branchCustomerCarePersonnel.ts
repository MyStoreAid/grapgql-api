import { FindCustomerCarePersonnel, User } from "../../types";
import { UserBranch } from "../../../userBranches/types";
import { UserBranch as UserBranchModel, User as UserModel} from "@mystoreaid/prisma-models";

export default async function branchCustomerCarePersonnel (parent: any, args: FindCustomerCarePersonnel ): Promise<Array<User>> | never {
    const userId: string = args.userId;
    const companyId: string = args.companyId;
    const branchId: string = args.branchId;
    let customerCarePersonnels: Array<User> = [];

    try{
        const condition: any = { AND: [{ userId: userId }, { companyId: companyId } , { branchId: branchId } ] };
        const include: any = { users: true };
        const existingUserBranch: Array<UserBranch> = await UserBranchModel.findManyWhereForeignKey(condition, include);

        if (existingUserBranch){
            for (let i = 0; i < existingUserBranch.length; i ++) {
                if(existingUserBranch[i].users.isCustomerCarePersonnel){
                    customerCarePersonnels.push(existingUserBranch[i].users);
                }
            }
            return customerCarePersonnels;
        }
        else {
            throw new Error (`There exists no Branch with User ID ${userId}, Company ID ${companyId} and Branch ID ${branchId}`);
        }
    }
    catch(error: any){
        throw new Error (`There was an error updating Branch with User ID ${userId}, Company ID ${companyId} and Branch ID ${branchId}`)
    }
}