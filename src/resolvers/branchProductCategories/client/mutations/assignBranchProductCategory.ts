import { BranchProductCategory as BranchProductCategoryModel } from "@mystoreaid/prisma-models";
import { AssignBranchProductCategoryArgs, BranchProductCategory } from "../../../../resolvers/branchProductCategories/types";


export default async function assignBranchProductCategory(parent: any, args: AssignBranchProductCategoryArgs): Promise<BranchProductCategory> {
    const branchId: string = args.branchId;
    const productCategoryId: string = args.productCategoryId;
    let branchProductCategory: BranchProductCategory;
    
    const data = {
        data: {
            branches: { connect: { id: branchId } },
            product_categories: { connect: { id: productCategoryId } },
            users: args.lastModifiedBy ? { connect: { userId: args.lastModifiedBy } } : undefined
        },
        include: {
            branches: true,
            product_categories: true,
            users: true
        }
    }

    try {
        branchProductCategory = await BranchProductCategoryModel.createOneForeignKey(data);
    }
    catch(error: any){
        throw new Error(`There was an error trying to assign product category with Product Category ID ${productCategoryId} to Branch with ID ${branchId}`)
    }

    return branchProductCategory;
}