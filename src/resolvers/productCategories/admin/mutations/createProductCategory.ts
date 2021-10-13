import { ProductCategory } from '../../types';
import { ProductCategory as ProductCategoryModel } from "@mystoreaid/prisma-models";


export default async function createProductCategory (parent: any, args: ProductCategory): Promise<ProductCategory> {
    
    return await ProductCategoryModel.createOne(args);
}