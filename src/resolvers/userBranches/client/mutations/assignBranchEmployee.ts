import { 
    Branch as BranchModel, 
    UserBranch as UserBranchModel, 
    RolesPermission as RolesPermissionModel,
    User as UserModel } from "@mystoreaid/prisma-models";
import { Branch } from "../../../../resolvers/branches/types";
import { User } from "../../../../resolvers/users/types";
import { Role, RoleId, RoleWithPermission } from "../../../roles/types";
import { Employee, UserBranch } from "../../types";


export default async function assignBranchEmployee (parent: any, args: UserBranch): Promise<Employee> | never {

    const branchId: string = args.branchId;
    const userId: string = args.userId;
    let existingBranch: Branch;
    let existingUser: User;
    let rolePermission: any;
    let userBranch: UserBranch;
   
    try{
        existingUser = await UserModel.findOne(userId);
    }
    catch(error: any){
        throw new Error(`There was an error finding User with User ID ${userId}`);
    }

    try{
        existingBranch = await BranchModel.findOne(branchId);
    }
    catch{
        throw new Error(`There was an error finding Branch with Branch ID ${branchId}`);
    }

    if(existingUser && existingBranch) {
        const data = {
            data: {
                addedPermissionIds: args.addedPermissionIds,
                excludedPermissions: args.excludedPermissionIds,
                employeeTypeId: args.employeeTypeId,
                customerCareId: args.customerCareId,
                main: args.main,
                status: args.status,
                branches: { connect: { id: args.branchId} },
                users: { connect: { userId: args.userId} },
                roles: { connect: { id: args.roleId}},
                companies: args.companyId ? { connect: { id: args.companyId } } : undefined
            },
            include: {
                branches: true,
                companies: true,
                roles: true,
                users: true
            }
        }
        try{
            userBranch =  await UserBranchModel.createOneForeignKey(data);
        }
        catch(error: any){
            throw new Error(`There was an error assign User with User ID ${userId} to Branch with Branch ID ${branchId} Error ${error}`);
        }

        const roleId: RoleId = userBranch.roles.id;

        try{
            rolePermission = await RolesPermissionModel.findManyWhere({ roleId: roleId });
        }
        catch(error: any) {
            throw new Error(`There was an error finding Role Permission relationship of role with ID ${roleId} `)
        };

        const role: Role = userBranch.roles;

        let roleWithPermission: RoleWithPermission = {
            id: role.id,
            name: role.name,
            description: role.description, 
            created_at: role.created_at,
            updated_at: role.updated_at,
            deleted: role.deleted, 
            rolePermissions: rolePermission
        };

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
            role: roleWithPermission
        }

        return employee;
    }

    throw new Error(`There exists no User with User ID ${userId} / There exists no Branch with ID ${branchId}`);
   
}