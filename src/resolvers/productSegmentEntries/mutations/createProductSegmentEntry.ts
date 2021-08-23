import { ProductSegmentEntry } from '../types';
import ProductSegmentEntryModel from '../ProductSegmentEntryModel';



export default async function createProductSegmentEntry (parent: any, args: ProductSegmentEntry, context: any): Promise<ProductSegmentEntry> {
    const data = {
        data: {
            name: args.name,
            description: args.description,
            product_segments: args.productSegmentId ? {connect: { id: args.productSegmentId }} : undefined,

        },

        include: {
            product_segments: true
        }
    }

    
    
    return ProductSegmentEntryModel.createOneForeignKey(context.prisma.product_segment_entries, data);
}