import { BranchIdArgs, Branch } from "../../types";
import { Branch as BranchModel } from '@mystoreaid/prisma-models';

export default async function branch (parent: any, args: BranchIdArgs): Promise<Branch> | never {
    
    let result!: Branch;
    const branchId: string = args.id;
    const data = {
        appointments: true,
        branch_user_groups: true,
        business_categories: true,
        companies: true,
        users: true,
    }

    try {
        result = await BranchModel.findOneForeignKey(branchId, data);
    } catch (error: unknown) {
        throw new Error(`There was an error getting Branch with ID ${branchId}.`);
    }

    if (!result) {
        throw new Error(`There is no Branch with ID ${branchId}.`);
    }
    
    return result;


}