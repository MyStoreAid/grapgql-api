import { Cashflow, UpdateBranchCashflow, CashflowArgs } from "../../types";
import { Cashflow as CashflowModel,
        UserBranch as UserBranchModel,

} from "@mystoreaid/prisma-models";
import { UserBranch } from "resolvers/userBranches/types";

export default async function updateBranchCashflow(parent: any, args: UpdateBranchCashflow): Promise<Cashflow> | never {
    const userId: string = args.userId;
    const branchId: string = args.branchId;
    const companyId: string = args.companyId;
    const cashflowId: string = args.cashflowId;
    const updateArgs: CashflowArgs = args.CashflowArgs;
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
            };
            const params: {data: any, include: any} = { data: updateArgs, include: include };
            const cashflow: Cashflow = await CashflowModel.updateOneForeignKey(cashflowId, params);
            return cashflow;
        }
        else {
            throw new Error (`There exists no User ${message}`);
        }
    }
    catch(error: any) {
        throw new Error(`There was an error finding User ${message}`);
    }
}