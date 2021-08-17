import { InternalBusinessCategory } from "../types";
import InternalBusinessCategoryModel from "../InternalBusinessCategoryModel";

export default async function updateInternalBusinessCategory (parent: any, args: InternalBusinessCategory, context: any): Promise<InternalBusinessCategory> | never{
    let existingInternalBusinessCategory!: InternalBusinessCategory;
    const internalBusinessCategoryId: string = args.id;
   

    try {
        existingInternalBusinessCategory = await InternalBusinessCategoryModel.findOne(context.prisma.internal_business_categories, internalBusinessCategoryId)
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching InternalBusinessCategory with ID ${internalBusinessCategoryId}`);
    }

    if(!existingInternalBusinessCategory) {
        throw new Error(`There is no InternalBusinessCategory with ID ${internalBusinessCategoryId}`);
    }

    return await InternalBusinessCategoryModel.updateOne(context.prisma.internal_business_categories, internalBusinessCategoryId, args);
}