import PermissionModel from "resolvers/permissions/PermissionModel";
import UserAccessModel from "../models/UserAccess";
import BranchModel from "../resolvers/branches/BranchModel";
import { User } from "../resolvers/users/types";
import UserModel from "../resolvers/users/UserModel";

export default class UserAccessService {
    static async getUserAccess(user: User, companyIds: Array<string> = []) {
        let access;
    
        const existingAccess = await UserAccessModel.findOneWhere({userId: user.userId });
        if (existingAccess && typeof existingAccess.access === 'object') {
          access = existingAccess.access;
        //   logger.info(`User ${user.userId} fetched access from cache`);
        }
        if (!access) {
          const result: any = {};
          const generatedUserAccess = await UserModel.generateUserAccess(companyIds, user.userId);
    
          result.companies = generatedUserAccess.rows;
    
          if (result) {
            for (let x = 0; x < result.companies.length; x += 1) {
              const company = result.companies[x];
              company.features = company.features.map(feature => feature.name.toLowerCase());
              if (company.branches) {
                for (let m = 0; m < company.branches.length; m += 1) {
                  const branch = company.branches[m];
                  branch.role = branch.role.name;
                  branch.customercarePersonnel = await BranchModel.mainCustomerCare(branch.id);
                  let addedPermissions: Array<string> = [];
                  let excludedPermissions: Array<string> = [];
                  branch.permissions = branch.permissions.map(permission => permission.name.toLowerCase());
    
                  if (Array.isArray(branch.addedPermissionIds) && branch.addedPermissionIds.length > 0) {
                      // @todo write in prisma format
                    // addedPermissions = await PermissionModel.table.select('name').whereIn('id', branch.addedPermissionIds);
                    addedPermissions = addedPermissions.map(permission => permission.name.toLowerCase());
                  }
                  if (Array.isArray(branch.excludedPermissionIds) && branch.excludedPermissionIds.length > 0) {
                      // @todo write in prisma format
                    // excludedPermissions = await Permission.table.select('name').whereIn('id', branch.excludedPermissionIds);
                    excludedPermissions = excludedPermissions.map(permission => permission.name.toLowerCase());
                  }
                  branch.permissions = branch.permissions.concat(addedPermissions);
                  branch.permissions = branch.permissions.filter(permission => !excludedPermissions.includes(permission));
                }
    
              }
            }
          }
          access = result;
    
          // delete existing access
          // @todo implement deleteWhere and replace with line 56
        //   await UserAccessModel.deleteOne ({userId: user.userId});
    
          // save access
          if (companyIds.length > 0) {
            const existing = await UserAccessModel.findOneWhere({ companyId: user.userId });
            existing.access.companies = existing.access.companies.concat(result.companies);
            // @todo replace with prisma format
            // await UserAccessModel.table.where({ userId: user.userId }).update({ access: existing.access })
          } else {
            await UserAccessModel.createOne({userId: user.userId, access });
          }
        //   logger.info(`User ${user.userId} fetched access normally`);
        }
    
        return access;
      }
}