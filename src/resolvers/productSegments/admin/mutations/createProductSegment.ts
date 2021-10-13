import { ProductSegment } from '../../types';
import { ProductSegment as ProductSegmentModel } from "@mystoreaid/prisma-models";

export default async function createProductSegment (parent: any, args: ProductSegment): Promise<ProductSegment> {
    
    return ProductSegmentModel.createOne(args);
}