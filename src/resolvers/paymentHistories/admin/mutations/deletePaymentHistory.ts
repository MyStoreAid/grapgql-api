import { DeletePaymentHistoryArgs, PaymentHistory } from "../../../../resolvers/paymentHistories/types";
import { PaymentHistory as PaymentHistoryModel, UserBranch as UserBranchModel } from "@mystoreaid/prisma-models";

export default async function deletePaymentHistory (parent: any, args: DeletePaymentHistoryArgs): Promise<PaymentHistory> | never {
    const userId: string = args.userId;
    const branchId: string = args.branchId;
    const companyId: string = args.companyId;
    const paymentHistoryId: string = args.paymentHistoryId;
    
    try {
        const condition: any = { AND: [ { userId: userId }, { companyId: companyId }, { branchId: branchId } ] };
        const existingBranch = await UserBranchModel.findOneWhere(condition);
        if (existingBranch) {
            const include: any = { branches: true};
            const paymentHistories: PaymentHistory = await PaymentHistoryModel.deleteOneForeignKey(paymentHistoryId, include);
            return paymentHistories;
        }
        else {
            throw new Error (`There exists no Branch with User ID ${userId}, Company ID ${companyId} and Branch ID ${branchId}`);
        }
    }
    catch(error: any) {
        throw new Error (`There was an error finding Branch with User ID ${userId}, Company ID ${companyId} and Branch ID ${branchId}`)
    }
}