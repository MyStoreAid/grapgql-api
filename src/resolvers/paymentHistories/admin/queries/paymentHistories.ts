import { PaymentHistoryPayload, PaymentHistory } from "../../../../resolvers/paymentHistories/types";
import { PaymentHistory as PaymentHistoryModel, UserBranch as UserBranchModel } from "@mystoreaid/prisma-models";

export default async function paymentHistories (parent: any, args: PaymentHistoryPayload): Promise<Array<PaymentHistory>> | never {
    const userId: string = args.userId;
    const branchId: string = args.branchId;
    const companyId: string = args.companyId;

    try {
        const condition: any = { AND: [ { userId: userId }, { companyId: companyId }, { branchId: branchId } ] };
        const existingBranch = await UserBranchModel.findOneWhere(condition);
        if (existingBranch) {
            const paymentCondition: any = { branchId: branchId};
            const include: any = { branches: true};
            const paymentHistories: Array<PaymentHistory> = await PaymentHistoryModel.findManyWhereForeignKey(paymentCondition, include);
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