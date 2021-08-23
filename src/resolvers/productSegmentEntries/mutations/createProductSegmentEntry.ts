import { ProductSegmentEntry } from '../types';
import ProductSegmentEntryModel from '../ProductSegmentEntryModel';
import UuidHelper from "../../../helpers/UuidHelper";
import TimeHelper from "../../../helpers/TimeHelper";
import { PrismaModelContext } from "types/prisma";

export default async function createProductSegmentEntry (parent: any, args: ProductSegmentEntry, context: any): Promise<ProductSegmentEntry> {
    const data = {
        data: {
            id: UuidHelper.newUuid,
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