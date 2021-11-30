import { UserRole, SetCustomerCarePersonnelArgs, UserBranch } from "../../types";
import { UserBranch as UserBranchModel, Role as RoleModel, User as UserModel } from "@mystoreaid/prisma-models";
import { Role } from "resolvers/roles/types";
import { User } from "resolvers/users/types";

export default async function setMainCustomerCarePersonnel(parent: any, args: SetCustomerCarePersonnelArgs): Promise <UserRole> | never {
    const userId: string = args.userId;
    const branchId: string = args.branchId;
    const message: string = `with Branch ID ${branchId} and User ID ${userId}`;

    try {
        const existingUserBranch: UserBranch = await UserBranchModel.findOneWhere({branchId: branchId});

        if(existingUserBranch) {
            const condition: any = { AND: [ { branchId: branchId }, { main: true } ] }
            const updateCondition: any = { AND: [ { branchId: branchId }, { userId: userId } ] }
            await UserBranchModel.updateMany(condition, { main: false});
            const updatedUserBranch: UserBranch = await UserBranchModel.updateOneWhere ({ where: updateCondition, data: { main: true } });

            const role: Role = await RoleModel.findOne(updatedUserBranch.roleId);
            const user: User = await UserModel.findOne(updatedUserBranch.userId);

            const userRole: UserRole = { user: user, role: role};
            return userRole;
        }
        else {
            throw new Error(`There exists no branch ${message}`);
        }
    }
    catch(error:any) {
        throw new Error(`There was an error finding Branch with ${message}`);
    }
}