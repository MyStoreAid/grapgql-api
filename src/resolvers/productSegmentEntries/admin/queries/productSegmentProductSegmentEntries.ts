import { ProductSegmentIdArgs, ProductSegmentEntry } from "../../types";
import { ProductSegmentEntry as ProductSegmentEntryModel } from "@mystoreaid/prisma-models";

export default async function productSegmentProductSegmentEntries (parent: any, args: ProductSegmentIdArgs): Promise<Array<ProductSegmentEntry>> | never {
    
    let result: Array<ProductSegmentEntry>;
    const productSegmentId: string = args.productSegmentId;
    const data = {product_segments: true}

    try {
        result = await ProductSegmentEntryModel.findManyWhereForeignKey({productSegmentId: productSegmentId}, data);
    } catch (error: unknown) {
        throw new Error(`There was an error getting ProductSegmentEntry with Product Segment ID ${productSegmentId}.`);
    }

    if (!result) {
        throw new Error(`There is no ProductSegmentEntry with Product Segment ID ${productSegmentId}.`);
    }
    
    return result;


}