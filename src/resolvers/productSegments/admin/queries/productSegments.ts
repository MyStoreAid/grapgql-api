import { ProductSegment } from "../../types";
import ProductSegmentModel from "../../ProductSegmentModel";

export default async function productSegments (parent: any, args: ProductSegment, context: any): Promise<ProductSegment[]> {
    return await ProductSegmentModel.findMany(context.prisma.product_segments);
}