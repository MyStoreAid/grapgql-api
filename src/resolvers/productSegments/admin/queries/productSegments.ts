import { ProductSegment } from "../../types";
import ProductSegmentModel from "../../ProductSegmentModel";

export default async function productSegments (parent: any, args: ProductSegment): Promise<ProductSegment[]> {
    return await ProductSegmentModel.findMany();
}