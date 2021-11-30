import { ProductSegmentEntry,FindProductSegmentEntryArgs } from '../../types';
import { ProductSegmentEntry as ProductSegmentEntryModel } from "@mystoreaid/prisma-models";

export default async function updateProductSegmentEntry (parent: any, args: FindProductSegmentEntryArgs): Promise<ProductSegmentEntry> | never{
    
    let existingProductSegmentEntry!: ProductSegmentEntry;
    const productSegmentEntryId: string = args.id;
    const productSegmentId: string = args.productSegmentId;
    const condition = { AND: [ { id: productSegmentEntryId }, { productSegmentId: productSegmentId } ] };
    const data= {data: args, where: condition};
    

    try {
        existingProductSegmentEntry = await ProductSegmentEntryModel.findOneWhere(condition);
    } catch(error: unknown) {
       
        throw new Error(`There was an error fetching ProductSegmentEntry with ID ${productSegmentEntryId}`);
    }

    if(!existingProductSegmentEntry) {
        throw new Error(`There is no ProductSegmentEntry with ID ${productSegmentEntryId}`);
    }
    
    return await ProductSegmentEntryModel.updateOneWhere(data);
}