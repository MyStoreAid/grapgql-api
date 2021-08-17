import { ProductCategoryIdArgs, ProductCategory } from '../types';
import ProductCategoryModel from '../ProductCategoryModel';

export default async function deleteProductCategory (parent: any, args: ProductCategoryIdArgs, context: any): Promise<ProductCategory> | never {

    let existingProductCategory!: ProductCategory;
    const productCategoryId: string = args.id;

    try {
        existingProductCategory = await ProductCategoryModel.findOne(context.prisma.product_categories, productCategoryId);
    } catch (error: unknown) {
        console.error(error);
        throw new Error(`There is an error fetching a ProductCategory with ID ${productCategoryId}`);
    }

    if(!existingProductCategory) {
        throw new Error(`There is no ProductCategory with ID ${productCategoryId}`);
    }

    return await ProductCategoryModel.deleteOne(context.prisma.product_categories, productCategoryId);
}