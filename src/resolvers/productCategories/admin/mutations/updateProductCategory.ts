import { ProductCategory } from '../../types';
import { ProductCategory as ProductCategoryModel } from "@mystoreaid/prisma-models";

export default async function updateProductCategory (parent: any, args: ProductCategory): Promise<ProductCategory> | never {
    
    let existingProductCategory!: ProductCategory;
    const productCategoryId: string = args.id;
   
    try {
        existingProductCategory = await ProductCategoryModel.findOne(productCategoryId);
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching ProductCategory with ID ${productCategoryId}`);
    }

    if(!existingProductCategory) {
        throw new Error(`There is no ProductCategory with ID ${productCategoryId}`);
    }

    return await ProductCategoryModel.updateOne(productCategoryId, args)
}