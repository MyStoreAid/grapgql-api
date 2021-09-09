import { ProductSegmentEntry } from "../../types";
import { ProductSegmentEntry as ProductSegmentEntryModel } from "@mystoreaid/prisma-models";

export default async function productSegmentEntries (parent: any, args: ProductSegmentEntry): Promise<ProductSegmentEntry[]> {

    const data = { product_segments: true}
    
    return await ProductSegmentEntryModel.findManyForeignKey(data);
}