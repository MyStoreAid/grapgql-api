import { ProductSegmentEntryIdArgs, ProductSegmentEntry } from "../../types";
import ProductSegmentEntryModel from "../../ProductSegmentEntryModel";

export default async function productSegmentEntry (parent: any, args: ProductSegmentEntryIdArgs, context: any): Promise<ProductSegmentEntry> | never {
    
    let result!: ProductSegmentEntry;
    const productSegmentEntryId: string = args.id;
    const data = {product_segments: true}

    try {
        result = await ProductSegmentEntryModel.findOneForeignKey(context.prisma.product_segment_entries, productSegmentEntryId, data);
    } catch (error: unknown) {
        throw new Error(`There was an error getting ProductSegmentEntry with ID ${productSegmentEntryId}.`);
    }

    if (!result) {
        throw new Error(`There is no ProductSegmentEntry with ID ${productSegmentEntryId}.`);
    }
    
    return result;


}