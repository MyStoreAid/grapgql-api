import { ProductSegmentIdArgs, ProductSegment } from "../types";
import ProductSegmentModel from "../ProductSegmentModel";

export default async function productSegment (parent: any, args: ProductSegmentIdArgs, context: any): Promise<ProductSegment> | never {
    
    let result!: ProductSegment;
    const productSegmentId: string = args.id;

    try {
        result = await ProductSegmentModel.findOne(context.prisma.product_segments, productSegmentId);
    } catch (error: unknown) {
        throw new Error(`There was an error getting ProductSegment with ID ${productSegmentId}.`);
    }

    if (!result) {
        throw new Error(`There is no ProductSegment with ID ${productSegmentId}.`);
    }
    
    return result;


}