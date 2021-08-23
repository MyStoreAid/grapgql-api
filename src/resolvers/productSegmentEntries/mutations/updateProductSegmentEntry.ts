import { ProductSegmentEntry } from '../types';
import ProductSegmentEntryModel from '../ProductSegmentEntryModel';


export default async function updateProductSegmentEntry (parent: any, args: ProductSegmentEntry, context: any): Promise<ProductSegmentEntry> | never{
    
    let existingProductSegmentEntry!: ProductSegmentEntry;
    const productSegmentEntryId: string = args.id;
    const include = {product_segments: true}
    const data= {data: args, include: include};
    

    try {
        existingProductSegmentEntry = await ProductSegmentEntryModel.findOne(context.prisma.product_segment_entries, productSegmentEntryId);
    } catch(error: unknown) {
       
        throw new Error(`There was an error fetching ProductSegmentEntry with ID ${productSegmentEntryId}`);
    }

    if(!existingProductSegmentEntry) {
        throw new Error(`There is no ProductSegmentEntry with ID ${productSegmentEntryId}`);
    }
    
    return await ProductSegmentEntryModel.updateOneForeignKey(context.prisma.product_segment_entries, productSegmentEntryId, data);
}