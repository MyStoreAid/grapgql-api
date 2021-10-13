import { Branch } from "../../types";
import { Branch as BranchModel } from '@mystoreaid/prisma-models';

export default async function branches (parent: any, args: Branch): Promise<Branch[]> {

    const data = {             
        appointments: true,
        branch_user_groups: true,
        business_categories: true,
        companies: true,
        users: true,}
    
    return await BranchModel.findManyForeignKey(data);
}