import Model from "../../models/Model";
import BranchModel from "../../resolvers/branches/BranchModel";

export default class UserModel extends Model {

  static get table() {
    return this.connection.users
  }

    static get primaryKeyName(): string {
        return 'userId';
    }

    static get timestampFields(): string[] {
        return [
            'created_at',
            'updated_at',
            'server_created_at',
            'last_modified'
        ];
    }

    static async generateUserAccess(companyIds: Array<string> = [], userId: string) {
        let comapanyIdsString = '';
        if (companyIds.length > 0) {
          comapanyIdsString = companyIds.map((i) => `'${i}'`).toString();
        }
    
        return this.connection.$queryRaw(`
          select
           distinct on (companies.id)
           *,
           users_companies."addedPermissionIds",
           users_companies."excludedPermissionIds",
           users_companies."companyId",
           (select json_agg("p*") from
               (select permissions.name, permissions.id from permissions inner join roles_permissions rp on permissions.id =
               rp."permissionId" where users_companies."roleId" = rp."roleId") as "p*") as permissions,
           (select json_agg("f*") from
               (select features.name, features.id from features inner join subscriptions_features sf on features.id =
               sf."featureId" where subscriptions_features."subscriptionId" = sf."subscriptionId") as "f*") as features,
           (select row_to_json("bc*") from (select * from business_categories where companies."businessCategoryId" =
                "business_categories".id) as "bc*") as "businessCategory",
           (select row_to_json("r*") from (select roles.name from roles where users_companies."roleId" = roles.id) as "r*") as role,
           (select row_to_json("s*") from (select * from subscriptions where companies."subscriptionId" =
                subscriptions.id) as "s*") as subscription,
           (select json_agg(mybranches) from (select ${BranchModel.rawFieldNamesWithTableName},
                (select row_to_json("rb*") from (select roles.name from roles where users_branches."roleId" = roles.id) as "rb*") as role,
                users_branches."branchId",
                users_branches."addedPermissionIds",
                users_branches."excludedPermissionIds",
                (select row_to_json("bug*") from (select * from branch_user_groups where branches."branchUserGroupId" =
                  branch_user_groups.id) as "bug*") as branch_user_group,
                (select json_agg("pm*") from
                  (select distinct on (permissions.id) permissions.name, permissions.id from permissions inner join roles_permissions r_p on permissions.id =
                    r_p."permissionId" where r_p."roleId" = users_branches."roleId") as "pm*") as permissions,
                (select json_agg("bg*") from
                  (select distinct on (branch_goals.id) branch_goals.name, branch_goals.id from branch_goals inner join branches_branch_goals bb_g on branch_goals.id =
                    bb_g."branchGoalId" where bb_g."branchId" = branches.id) as "bg*") as "storeGoals",
                (select count(users_branches."userId") from users_branches where branches.id = users_branches."branchId") as "numberOfEmployees"
                from branches
                    inner join users_branches on branches.id = users_branches."branchId"
             where users_branches."userId" = '${
               userId
             }' and branches."companyId" = companies.id and branches.deleted = false order by branches.created_at ASC
          ) mybranches) as branches
          from companies
          inner join users_companies on users_companies."companyId" = companies.id
          inner join subscriptions_features on subscriptions_features."subscriptionId" = companies."subscriptionId"
          where companies.deleted = false and users_companies."userId" = '${userId}' 
          ${companyIds.length > 0 ? ` and companies.id in (${comapanyIdsString})` : ''}
        `);
      }
}