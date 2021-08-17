import { ProductDescription } from '../types';
import ProductDescriptionModel from '../ProductDescriptionModel';

export default async function createProductDescription (parent: any, args: ProductDescription, context: any): Promise<ProductDescription> {
    
    return ProductDescriptionModel.createOne(context.prisma.product_descriptions, args);
}