import { ProductDescription } from '../../types';
import { ProductDescription as ProductDescriptionModel } from "@mystoreaid/prisma-models";

export default async function createProductDescription (parent: any, args: ProductDescription): Promise<ProductDescription> {
    
    return ProductDescriptionModel.createOne(args);
}