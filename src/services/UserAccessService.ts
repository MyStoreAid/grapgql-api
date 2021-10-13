import { Permission } from "../resolvers/permissions/types";
import { User } from "../resolvers/users/types";
import { Permission as PermissionModel,
         UserAccess as UserAccessModel, 
         Branch as BranchModel, 
         User as UserModel
         } from "@mystoreaid/prisma-models";

export default class UserAccessService {
    static async getUserAccess(user: User, companyIds: Array<string> = []) {

        let access;
    
        const existingAccess = await UserAccessModel.findOneWhere({ userId: user.userId });
        if (existingAccess && typeof existingAccess.access === 'object') {
          access = existingAccess.access;
        //   logger.info(`User ${user.userId} fetched access from cache`);
        }
        
        if (!access) {
          
          const result: any = {};
          const generatedUserAccess = await UserModel.generateUserAccess(companyIds, user.userId);
    
          result.companies = generatedUserAccess;
         
          if (result) {
            for (let x = 0; x < result.companies.length; x += 1) {
              const company = result.companies[x];
              company.features = company.features.map((feature: any) => feature.name.toLowerCase());
              if (company.branches) {
                for (let m = 0; m < company.branches.length; m += 1) {
                  const branch = company.branches[m];
                  branch.role = branch.role.name;
                  branch.customercarePersonnel = await BranchModel.mainCustomerCare(branch.id);
                  let addedPermissions: Array<Permission> = [];
                  let addedPermissionsList: Array<string> = [];
                  let excludedPermissions: Array<Permission> = [];
                  let excludedPermissionsList: Array<string> = [];
                  branch.permissions = branch.permissions.map((permission: any) => permission.name.toLowerCase());
    
                  if (Array.isArray(branch.addedPermissionIds) && branch.addedPermissionIds.length > 0) {
                    
                    addedPermissions = await PermissionModel.findManyWhere({id: branch.addedPermissionIds});
                    addedPermissionsList = addedPermissions.map(permission => permission.name.toLowerCase());
                  }
                  if (Array.isArray(branch.excludedPermissionIds) && branch.excludedPermissionIds.length > 0) {
                      
                    excludedPermissions = await PermissionModel.findManyWhere({id: branch.excludedPermissionIds});
                    excludedPermissionsList = excludedPermissions.map(permission => permission.name.toLowerCase());
                  }
                  branch.permissions = branch.permissions.concat(addedPermissionsList);
                  branch.permissions = branch.permissions.filter((permission: any) => !excludedPermissionsList.includes(permission));
                }
    
              }
            }
          }
          access = result;
    
          // delete existing access
          await UserAccessModel.updateOneWhere({
            where:{userId: user.userId}, data: { access : null }
          });
    
          // save access
          if (companyIds.length > 0) {
           
            const existing = await UserAccessModel.findOneWhere({ userId: user.userId });
            
            if (existing.access === null ) { 
              existing.access = {companies: []} ;
            }

            existing.access.companies = existing.access.companies.concat(result.companies);
            
            await UserAccessModel.updateOneWhere({data: {access: existing.access}, where:{ userId: user.userId } })
          } else {
            await UserAccessModel.createOne({userId: user.userId, access });
          }
        //   logger.info(`User ${user.userId} fetched access normally`);
        }
    
        return access;
      }
}