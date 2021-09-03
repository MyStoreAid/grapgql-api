import { ProductSegment } from '../../types';
import ProductSegmentModel from '../../ProductSegmentModel';

export default async function createProductSegment (parent: any, args: ProductSegment): Promise<ProductSegment> {
    
    return ProductSegmentModel.createOne(args);
}