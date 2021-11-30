import { Cashflow, FindBranchCashFlows } from "../../types";
import { Cashflow as CashflowModel,
        UserBranch as UserBranchModel,

} from "@mystoreaid/prisma-models";
import { UserBranch } from "resolvers/userBranches/types";

export default async function branchCashflows(parent: any, args: FindBranchCashFlows): Promise<Array<Cashflow>> | never {
    const userId: string = args.userId;
    const branchId: string = args.branchId;
    const companyId: string = args.companyId;
    const message: string = `with User ID ${userId}, Branch ID ${branchId} and Company ID ${companyId}`;

    try {
        const condition: any =  { AND: [{userId: userId}, { branchId: branchId}, { company: companyId }]};
        const existingUserBranch: UserBranch = await UserBranchModel.findOneWhere(condition);

        if(existingUserBranch) {
            const include: any = {
                branches: true,
                users_cashflows_createdByTousers: true,
                users_cashflows_lastModifiedByTousers: true,
                users_cashflows_statusChangedByTousers: true,
            }
            const cashflows: Array<Cashflow> = await CashflowModel.findManyWhereForeignKey({ branchId: branchId}, include);
            return cashflows;
        }
        else {
            throw new Error (`There exists no User ${message}`);
        }
    }
    catch(error: any) {
        throw new Error(`There was an error finding User ${message}`);
    }
}