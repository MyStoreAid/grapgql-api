import { ProductCategory } from '../types';
import ProductCategoryModel from '../ProductCategoryModel';


export default async function createProductCategory (parent: any, args: ProductCategory, context: any): Promise<ProductCategory> {
    
    return await ProductCategoryModel.createOne(context.prisma.product_categories, args);
}