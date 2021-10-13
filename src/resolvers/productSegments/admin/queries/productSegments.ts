import { ProductSegment } from "../../types";
import { ProductSegment as ProductSegmentModel } from "@mystoreaid/prisma-models";

export default async function productSegments (parent: any, args: ProductSegment): Promise<ProductSegment[]> {
    return await ProductSegmentModel.findMany();
}