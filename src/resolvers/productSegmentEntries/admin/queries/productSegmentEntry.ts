import { FindProductSegmentEntryArgs, ProductSegmentEntry } from "../../types";
import { ProductSegmentEntry as ProductSegmentEntryModel } from "@mystoreaid/prisma-models";

export default async function productSegmentEntry (parent: any, args: FindProductSegmentEntryArgs): Promise<ProductSegmentEntry> | never {
    
    let result: ProductSegmentEntry;
    const productSegmentEntryId: string = args.id;
    const productSegmentId: string = args.productSegmentId;
    const data = {product_segments: true}

    try {
        const condition: any = { AND: [ { id: productSegmentId }, { productSegmentId: productSegmentId } ]}
        result = await ProductSegmentEntryModel.findOneWhereForeignKey(condition, data);
    } catch (error: unknown) {
        throw new Error(`There was an error getting ProductSegmentEntry with Product Segment ID ${productSegmentId} and Product Segment Entry ID ${productSegmentEntryId}`);
    }

    if (!result) {
        throw new Error(`There is no ProductSegmentEntry with Product Segment ID ${productSegmentId} and Product Segment Entry ID ${productSegmentEntryId}`);
    }
    
    return result;


}