import { ProductSegmentEntry, ProductSegmentEntryIdArgs } from '../../types';
import ProductSegmentEntryModel from '../../ProductSegmentEntryModel';


export default async function deleteProductSegmentEntry (parent: any, args: ProductSegmentEntryIdArgs): Promise<ProductSegmentEntry> | never{
    
    let existingProductSegmentEntry!: ProductSegmentEntry;
    const productSegmentEntryId: string = args.id;

    try {
        existingProductSegmentEntry = await ProductSegmentEntryModel.findOne(productSegmentEntryId);
    } catch(error: unknown) {
        
        throw new Error(`There was an error fetching ProductSegmentEntry with ID ${productSegmentEntryId}`);
    }

    if(!existingProductSegmentEntry) {
        throw new Error(`There is no ProductSegmentEntry with ID ${productSegmentEntryId}`);
    }
    
    return await ProductSegmentEntryModel.deleteOne(productSegmentEntryId)
}