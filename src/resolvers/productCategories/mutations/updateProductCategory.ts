import { ProductCategory } from '../types';
import ProductCategoryModel from '../ProductCategoryModel';

export default async function updateProductCategory (parent: any, args: ProductCategory, context:any, info:any): Promise<ProductCategory> | never {
    
    let existingProductCategory!: ProductCategory;
    const productCategoryId: string = args.id;
   
    try {
        existingProductCategory = await ProductCategoryModel.findOne(context.prisma.product_categories, productCategoryId);
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching ProductCategory with ID ${productCategoryId}`);
    }

    if(!existingProductCategory) {
        throw new Error(`There is no ProductCategory with ID ${productCategoryId}`);
    }

    return await ProductCategoryModel.updateOne(context.prisma.product_categories, productCategoryId, args)
}