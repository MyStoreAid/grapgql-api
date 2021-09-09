import { Permission } from "../../../../resolvers/permissions/types";
import { Role, RoleId, RoleWithPermission } from "../../../../resolvers/roles/types";
import { FindBranchEmployeeArgs, Employee, UserBranch } from "./../../types";
import { RolesPermission as RolesPermissionModel, UserBranch as UserBranchModel} from "@mystoreaid/prisma-models";

export default async function findBranchEmployees (parent: any, args: FindBranchEmployeeArgs): Promise<Employee[]> {

    let userBranches: Array<UserBranch> = []

    const data: {condition: any, 
        include: {roles: boolean, branches: boolean, users: boolean}} = {
        condition: { branchId: args.branchId }, 
        include: {
            roles: true,
            branches: true, 
            users: true,
        }
    }
    
    try{
        userBranches =  await UserBranchModel.findManyForeignKey(data);
    }
    catch(error: any) {
        throw new Error(`There was an error finding Employees in Branch with Branch ID ${args.branchId}`);
    }
    
    let employees: Array<Employee> = [];
    let rolePermission: any = [];

    if (userBranches.length > 0) {
        for ( let userBranch of userBranches) {
            const roleId: RoleId = userBranch.roles.id;

            try{
                
                rolePermission = await RolesPermissionModel.findManyWhere({ roleId: roleId} );
            }
            catch(error: any) {
                throw new Error(`There was an error finding Role Permission relationship of role with ID ${roleId} `)
            };

            const role: Role = userBranch.roles

            let roleWithPermission: RoleWithPermission = {
                id: role.id,
                name: role.name,
                description: role.description, 
                created_at: role.created_at,
                updated_at: role.updated_at,
                deleted: role.deleted, 
                rolePermissions: rolePermission 
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
                role: roleWithPermission
            }
            
            employees.push(employee)


        }

    }

    return employees
}