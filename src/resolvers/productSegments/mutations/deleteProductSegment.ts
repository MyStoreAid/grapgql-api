import { ProductSegment, ProductSegmentIdArgs } from '../types';
import ProductSegmentModel from '../ProductSegmentModel';


export default async function deleteProductSegment (parent: any, args: ProductSegmentIdArgs, context: any): Promise<ProductSegment> | never{
    
    let existingProductSegment!: ProductSegment;
    const productSegmentId: string = args.id;

    try {
        existingProductSegment = await ProductSegmentModel.findOne(context.prisma.product_segments, productSegmentId);
    } catch(error: unknown) {
        throw new Error(`There was an error fetching ProductSegment with ID ${productSegmentId}`);
    }

    if(!existingProductSegment) {
        throw new Error(`There is no ProductSegment with ID ${productSegmentId}`);
    }
    
    return await ProductSegmentModel.deleteOne(context.prisma.product_segments, productSegmentId)
}