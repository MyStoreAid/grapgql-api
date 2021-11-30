import { Audit as AuditModel, UserBranch as UserBranchModel } from "@mystoreaid/prisma-models";
import { Audit, FindBranchAuditsArgs } from "../types";
import { UserBranch } from "../../../resolvers/userBranches/types";

export default async function branchAudits (parent: any, args: FindBranchAuditsArgs ): Promise<Array<Audit>> | never {
    const userId: string = args.userId;
    const companyId: string = args.companyId;
    const branchId: string = args.branchId;
    let audits: Array<Audit> = [];
 
    try{
        const condition: any = { AND: [{ userId: userId }, { companyId: companyId } , { branchId: branchId } ] };
        const include: any = { branches: true };
        const existingUserBranch: UserBranch = await UserBranchModel.findOneWhereForeignKey(condition, include);

        if (existingUserBranch){
            const auditCondition: any = { branchId: branchId};
            const auditInclude: any = {
                                        branches: true,
                                        users_audits_createdByTousers: true,
                                        users_audits_lastModifiedByTousers: true,
                                        audit_entries : true,
                                        branches_products_stocks: true,
                                        sales: true
                                    }
            audits = await AuditModel.findManyWhereForeignKey(auditCondition, auditInclude);
        
            return audits;
        }
        else {
            throw new Error (`There exists no Branch with User ID ${userId}, Company ID ${companyId} and Branch ID ${branchId}`);
        }
    }
    catch(error: any){
        throw new Error (`There was an error updating Branch with User ID ${userId}, Company ID ${companyId} and Branch ID ${branchId}`)
    }
}