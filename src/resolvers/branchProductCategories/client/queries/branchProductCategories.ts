import { BranchProductCategory as BranchProductCategoryModel } from "@mystoreaid/prisma-models";
import { 
    BranchProductCategoriesArgs, 
    BranchProductCategory } from "../../../../resolvers/branchProductCategories/types";
import { ProductCategory } from "../../../../resolvers/productCategories/types";

export default async function branchProductCategories(parent: any, args: BranchProductCategoriesArgs): Promise<ProductCategory[]> {
    const branchId: string = args.branchId;
    let productCategories: Array<ProductCategory> = [];
    let existingBranchProductCategories: Array<BranchProductCategory> = [];

    try{
        existingBranchProductCategories = await BranchProductCategoryModel.findManyWhereForeignKey({ branchId: branchId }, {
            branches: true,
            product_categories: true,
            users: true
        })
    }
    catch (error: any) {
        throw new Error(`There was an error find Branch Product Categories with Branch ID ${branchId}`);
    }

    if(existingBranchProductCategories.length > 0) {
        for (let branchProductCategory of existingBranchProductCategories) {
            productCategories.push(branchProductCategory.product_categories);
        }
        return productCategories;
    }

    throw new Error(`There exists no Branch Product Categories with Branch ID ${branchId}`);
}