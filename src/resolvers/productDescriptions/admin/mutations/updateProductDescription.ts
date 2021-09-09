import { ProductDescription } from '../../types';
import { ProductDescription as ProductDescriptionModel } from "@mystoreaid/prisma-models";


export default async function updateProductDescription (parent: any, args: ProductDescription): Promise<ProductDescription> | never{
    
    let existingProductDescription!: ProductDescription;
    const productDescriptionId: string = args.id;

    try {
        existingProductDescription = await ProductDescriptionModel.findOne(productDescriptionId);
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching ProductDescription with ID ${productDescriptionId}`);
    }

    if(!existingProductDescription) {
        throw new Error(`There is no ProductDescription with ID ${productDescriptionId}`);
    }
    
    return await ProductDescriptionModel.updateOne(productDescriptionId, args)
}