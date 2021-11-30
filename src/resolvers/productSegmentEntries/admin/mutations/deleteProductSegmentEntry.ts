import { ProductSegmentEntry, FindProductSegmentEntryArgs } from '../../types';
import { ProductSegmentEntry as ProductSegmentEntryModel } from "@mystoreaid/prisma-models";

export default async function deleteProductSegmentEntry (parent: any, args: FindProductSegmentEntryArgs): Promise<ProductSegmentEntry> | never{
    
    let existingProductSegmentEntry!: ProductSegmentEntry;
    const productSegmentEntryId: string = args.id;
    const productSegmentId: string = args.productSegmentId;
    const condition: any = { AND: [ { id: productSegmentEntryId }, { productSegmentId: productSegmentId } ] };

    try {
        existingProductSegmentEntry = await ProductSegmentEntryModel.findOneWhere(condition);
    } catch(error: unknown) {
        
        throw new Error(`There was an error fetching ProductSegmentEntry with ID ${productSegmentEntryId} and Product Segment ID ${productSegmentId}`);
    }

    if(!existingProductSegmentEntry) {
        throw new Error(`There is no ProductSegmentEntry with ID ${productSegmentEntryId} and Product Segment ID ${productSegmentId}`);
    }
    
    return await ProductSegmentEntryModel.deleteOneWhere(condition)
}