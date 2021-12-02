import { BranchCustomer, BranchCustomerArgs } from "../../types";
import { BranchesCustomer as BranchesCustomerModel } from "@mystoreaid/prisma-models";

export default async function createBranchCustomer(parent: any, args: BranchCustomerArgs): Promise<BranchCustomer> | never{
    const branchId: string = args.branchId;
    const customerId: string = args.customerId;
    
    try {
        const include: any = {branches: true, customers: true};
        const data: any = {
            branches: { connect: { id: branchId}},
            customers: { connect: { id: customerId}}
        }
        const params: {data: any, include: any} = { data: data, include: include};

        const branchCustomer: BranchCustomer = await BranchesCustomerModel.createOneForeignKey(params);
        return branchCustomer;
    }
    catch(error: any) {
        throw new Error (`There was an error creating Branch Customer`);
    }
}