import { ProductSegment } from '../../types';
import ProductSegmentModel from '../../ProductSegmentModel';

export default async function createProductSegment (parent: any, args: ProductSegment, context: any): Promise<ProductSegment> {
    
    return ProductSegmentModel.createOne(context.prisma.product_segments, args);
}