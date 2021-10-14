import { RolesPermission as RolesPermissionModel, UserBranch as UserBranchModel, Permission as PermissionModel } from "@mystoreaid/prisma-models/lib";
import { RolesPermission } from "resolvers/rolesPermissions/types";
import { AvailablePermissionArgs, AvailablePermission, Permission } from "../../../../resolvers/permissions/types";
import { UserBranch } from "../../../../resolvers/userBranches/types";

export default async function availablePermissions(parent: any, args: AvailablePermissionArgs): Promise<AvailablePermission> | never {
    const roleId: string = args.roleId;
    const branchId: string = args.branchId;
    const employeeId: string = args.employeeId;

    try {
        const userBranch: UserBranch = await UserBranchModel.findOneWhere({ AND:[ { userId: employeeId }, { roleId:roleId } ] });

        const rolePermissions: RolesPermission = await RolesPermissionModel.findManyWhere({roleId: roleId});
        let employeeAddedPermissions: Array<Permission> = [];
        
        for (let object of userBranch.addedPermissionIds){
            employeeAddedPermissions.push(await PermissionModel.findOne(object.id));
        }
        
        let employeeExcludedPermissions: Array<Permission> = [];
        for (let object of userBranch.excludedPermissionIds) {
            employeeExcludedPermissions.push(await PermissionModel.findOne(object.id));
        }

        let availablePermission: Permission | null = rolePermissions.permission ? rolePermissions.permission : null

        return {
            rolePermissions: rolePermissions,
            employeeAddedPermissions: employeeAddedPermissions,
            employeeExcludedPermissions: employeeExcludedPermissions,
            availablePermissions: availablePermission
        };
    }
    catch(error: any) {
        throw new Error(error);
    }

}