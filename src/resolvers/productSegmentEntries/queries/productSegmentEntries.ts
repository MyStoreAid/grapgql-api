import { ProductSegmentEntry } from "../types";
import ProductSegmentEntryModel from "../ProductSegmentEntryModel";

export default async function productSegmentEntries (parent: any, args: ProductSegmentEntry, context: any): Promise<ProductSegmentEntry[]> {

    const data = { product_segments: true}
    
    return await ProductSegmentEntryModel.findManyForeignKey(context.prisma.product_segment_entries, data);
}