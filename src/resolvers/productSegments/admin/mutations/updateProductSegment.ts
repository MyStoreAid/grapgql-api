import { ProductSegment } from '../../types';
import ProductSegmentModel from '../../ProductSegmentModel';


export default async function updateProductSegment (parent: any, args: ProductSegment, context: any): Promise<ProductSegment> | never{
    
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
    
    return await ProductSegmentModel.updateOne(context.prisma.product_segments, productSegmentId, args)
}