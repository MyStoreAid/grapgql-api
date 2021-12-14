import { AssignUserBranchArgs, UserBranch, UserRole } from "../../types";
import { Role } from "../../../../resolvers/roles/types";
import { UserCompany } from "../../../../resolvers/userCompanies/types";
import { User } from "../../../../resolvers/users/types";
import { UserBranch as UserBranchModel, 
    UserCompany as UserCompanyModel,
    UserAccess as UserAccessModel,
    Role as RoleModel } from "@mystoreaid/prisma-models";
import UserModel from "@mystoreaid/prisma-models/lib/User";

export default async function assignUserBranch(parent: any, args: AssignUserBranchArgs): Promise<UserRole> | never{
    const userId: string = args.userId;
    const branchId: string = args.branchId;
    const companyId: string = args.companyId;
    let roleId: string | undefined = args.roleId;
    let role: Role;
    const isCustomerCarePersonnel: boolean = args.isCustomerCarePersonnel;

    try {
        if (!roleId && isCustomerCarePersonnel === true) {
          role = await RoleModel.findOneWhere({name: 'customer care'});
          roleId = role.id;
        } else {
          role = await RoleModel.findOneWhere({id: roleId});
        }

        const userCompany: UserCompany = await UserCompanyModel.findOneWhere({ AND: [ { userId: userId }, { companyId: companyId } ] } );
        if(!userCompany) {
            await UserCompanyModel.createOne({
                userId: userId,
                companyId: companyId,
                roleId: roleId,
                addedPermissions: [],
                excludedPermissions: [],
              });
        }

        const condition: any = { AND: [ { userId: userId }, { branchId: branchId }  ] };
        const userBranch: UserBranch = await UserBranchModel.findOneWhere(condition);
        if(!userBranch) {
            await UserBranchModel.createOne({
                userId: userId,
                companyId: companyId,
                roleId: roleId,
                addedPermissions: [],
                excludedPermissions: [],
            });
        }
        else {
            const data = { roles: { connect: {id: roleId } } };
            const params = { data: data, where: condition}
            await UserBranchModel.updateOneWhere(params);
        }

        await UserAccessModel.deleteOneWhere({ userId: userId });
        const user: User = await UserModel.findOne(userId);
        const userRole: UserRole =  { user: user, role: role }

        return userRole;


    }
    catch(error: any) {
        throw new Error(`There was an error assigning user with ${userId} to Branch with Branch ID ${branchId}`);

    }
}
