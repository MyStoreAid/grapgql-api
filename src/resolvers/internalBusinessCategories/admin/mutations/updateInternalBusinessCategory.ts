import { InternalBusinessCategory } from "../../types";
import { InternalBusinessCategory as InternalBusinessCategoryModel } from "@mystoreaid/prisma-models";

export default async function updateInternalBusinessCategory (parent: any, args: InternalBusinessCategory): Promise<InternalBusinessCategory> | never{
    let existingInternalBusinessCategory!: InternalBusinessCategory;
    const internalBusinessCategoryId: string = args.id;
   

    try {
        existingInternalBusinessCategory = await InternalBusinessCategoryModel.findOne(internalBusinessCategoryId)
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching InternalBusinessCategory with ID ${internalBusinessCategoryId}`);
    }

    if(!existingInternalBusinessCategory) {
        throw new Error(`There is no InternalBusinessCategory with ID ${internalBusinessCategoryId}`);
    }

    return await InternalBusinessCategoryModel.updateOne(internalBusinessCategoryId, args);
}