import { InternalBusinessCategory,InternalBusinessCategoryIdArgs } from "../../types";
import InternalBusinessCategoryModel from "../../InternalBusinessCategoryModel";

export default async function deleteInternalBusinessCategory (parent: any, args: InternalBusinessCategoryIdArgs): Promise<InternalBusinessCategory> | never {
    let existingInternalBusinessCategory!: InternalBusinessCategory;
    const internalBusinessCategoryId: string = args.id;

    try {
        existingInternalBusinessCategory = await InternalBusinessCategoryModel.findOne(internalBusinessCategoryId);
    } catch (error: unknown) {
        console.error(error);
        throw new Error(`There is an error fetching a InternalBusinessCategory with ID ${internalBusinessCategoryId}`);
    }

    if(!existingInternalBusinessCategory) {
        throw new Error(`There is no InternalBusinessCategory with ID ${internalBusinessCategoryId}`);
    }


    return await InternalBusinessCategoryModel.deleteOne(internalBusinessCategoryId)
}