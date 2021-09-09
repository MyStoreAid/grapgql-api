import { Branch as BranchModel } from '@mystoreaid/prisma-models';
import {Branch, BranchIdArgs} from '../../types';

export default async function deleteBranch (parent: any, args: BranchIdArgs, context: any): Promise<Branch> | never {
    let existingBranch!: Branch;
    const branchId: string = args.id;

    try {
        existingBranch = await BranchModel.findOne(branchId)
    } catch (error: unknown) {
        console.error(error);
        throw new Error(`There is an error fetching a Branch with ID ${branchId}`);
    }

    if(!existingBranch) {
        throw new Error(`There is no Branch with ID ${branchId}`);
    }

    return BranchModel.deleteOne(branchId);
}