import { ProductSegment } from '../../types';
import { ProductSegment as ProductSegmentModel } from "@mystoreaid/prisma-models";

export default async function updateProductSegment (parent: any, args: ProductSegment): Promise<ProductSegment> | never{
    
    let existingProductSegment!: ProductSegment;
    const productSegmentId: string = args.id;

    try {
        existingProductSegment = await ProductSegmentModel.findOne(productSegmentId);
    } catch(error: unknown) {
       
        throw new Error(`There was an error fetching ProductSegment with ID ${productSegmentId}`);
    }

    if(!existingProductSegment) {
        throw new Error(`There is no ProductSegment with ID ${productSegmentId}`);
    }
    
    return await ProductSegmentModel.updateOne(productSegmentId, args)
}