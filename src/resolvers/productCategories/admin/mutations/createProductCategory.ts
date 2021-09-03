import { ProductCategory } from '../../types';
import ProductCategoryModel from '../../ProductCategoryModel';


export default async function createProductCategory (parent: any, args: ProductCategory): Promise<ProductCategory> {
    
    return await ProductCategoryModel.createOne(args);
}