import { Branch as BranchModel } from "@mystoreaid/prisma-models/lib";
import { Branch } from "resolvers/branches/types";
import { ClientCreateProduct ,Product } from "../types";

export default async function createProduct(parent: any, args: ClientCreateProduct): Promise<Product> {

    let branchId: string = args.branchId;
    let existingBranch: Branch;

    try{
        existingBranch = await BranchModel.findOne(branchId);
    }
    catch(error: any) {
        throw new Error(`There was an error finding Branch with ID ${branchId}`);
    }

    if(existingBranch) {
        args.brands = args.branchId ? { connect: { id: args.brandId} } : undefined
    }

    throw new Error(`There exists no Branch with ID ${branchId}`);
}