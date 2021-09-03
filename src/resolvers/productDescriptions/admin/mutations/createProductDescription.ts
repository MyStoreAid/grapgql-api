import { ProductDescription } from '../../types';
import ProductDescriptionModel from '../../ProductDescriptionModel';

export default async function createProductDescription (parent: any, args: ProductDescription): Promise<ProductDescription> {
    
    return ProductDescriptionModel.createOne(args);
}