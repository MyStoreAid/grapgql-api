import { ProductSegmentEntry } from '../../types';
import { ProductSegmentEntry as ProductSegmentEntryModel } from "@mystoreaid/prisma-models";

export default async function createProductSegmentEntry (parent: any, args: ProductSegmentEntry): Promise<ProductSegmentEntry> {
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

    
    
    return ProductSegmentEntryModel.createOneForeignKey(data);
}