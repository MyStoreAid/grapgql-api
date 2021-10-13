import { ProductCategoryIdArgs, ProductCategory } from '../../types';
import { ProductCategory as ProductCategoryModel } from "@mystoreaid/prisma-models";

export default async function deleteProductCategory (parent: any, args: ProductCategoryIdArgs): Promise<ProductCategory> | never {

    let existingProductCategory!: ProductCategory;
    const productCategoryId: string = args.id;

    try {
        existingProductCategory = await ProductCategoryModel.findOne(productCategoryId);
    } catch (error: unknown) {
        console.error(error);
        throw new Error(`There is an error fetching a ProductCategory with ID ${productCategoryId}`);
    }

    if(!existingProductCategory) {
        throw new Error(`There is no ProductCategory with ID ${productCategoryId}`);
    }

    return await ProductCategoryModel.deleteOne(productCategoryId);
}