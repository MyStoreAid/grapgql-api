import { BranchesCustomer as BranchesCustomerModel,
        UserBranch as UserBranchModel

} from "@mystoreaid/prisma-models";
import { FindCustomerArgs, BranchCustomer } from "../../types";
import { UserBranch } from "../../../userBranches/types";
import { Customer } from "../../../customers/types";

export default async function branchCustomers (parent: any, args: FindCustomerArgs ): Promise<Array<Customer>> | never {
    const userId: string = args.userId;
    const companyId: string = args.companyId;
    const branchId: string = args.branchId;
    let customers: Array<Customer> = [];
 
    try{
        const condition: any = { AND: [{ userId: userId }, { companyId: companyId } , { branchId: branchId } ] };
        const include: any = { branches: true };
        const existingUserBranch: UserBranch = await UserBranchModel.findOneWhereForeignKey(condition, include);

        if (existingUserBranch){
            const customerCondition: any = { branchId: branchId};
            const customerInclude: any = { customers: true}
            const branchCustomers: Array<BranchCustomer> = await BranchesCustomerModel.findManyWhereForeignKey(customerCondition, customerInclude);
            
            for (let i = 0; i < branchCustomers.length; i ++) {
                customers.push(branchCustomers[i].customer);
            }

            return customers;
        }
        else {
            throw new Error (`There exists no Branch with User ID ${userId}, Company ID ${companyId} and Branch ID ${branchId}`);
        }
    }
    catch(error: any){
        throw new Error (`There was an error updating Branch with User ID ${userId}, Company ID ${companyId} and Branch ID ${branchId}`)
    }
}