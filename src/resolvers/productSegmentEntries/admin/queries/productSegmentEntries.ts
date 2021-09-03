import { ProductSegmentEntry } from "../../types";
import ProductSegmentEntryModel from "../../ProductSegmentEntryModel";

export default async function productSegmentEntries (parent: any, args: ProductSegmentEntry): Promise<ProductSegmentEntry[]> {

    const data = { product_segments: true}
    
    return await ProductSegmentEntryModel.findManyForeignKey(data);
}