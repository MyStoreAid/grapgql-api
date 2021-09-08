import BranchProductCategoryModel from "../../../../resolvers/branchProductCategories/BranchProductCategoryModel";
import { BranchProductCategory, DeleteBranchProductCategoryArgs } from "../../../../resolvers/branchProductCategories/types";

export default async function deleteBranchProductCategory(parent: any, args: DeleteBranchProductCategoryArgs): Promise<BranchProductCategory> {
    const branchId: string = args.branchId;
    const productCategoryId: string = args.productCategoryId;
    let existingBranchProductCategory: BranchProductCategory;
    let errorMessage: string = ` Branch Product Category with Branch ID ${branchId} and Product Category ID ${productCategoryId}`;


    try {
        existingBranchProductCategory = await BranchProductCategoryModel.findOneWhere({ AND: [ { branchId: branchId }, { productCategoryId: productCategoryId } ] });
    }
    catch(error: any) {
        throw new Error(`There was an error finding ${errorMessage}`);
    }

    if(existingBranchProductCategory) {
        return await BranchProductCategoryModel.deleteOneForeignKey(existingBranchProductCategory.id, {
            branches: true,
            product_categories: true,
        });
    }
    throw new Error(`There exists no ${errorMessage}`);
    
}