import { InternalBusinessCategory } from "../../types";
import InternalBusinessCategoryModel from "../../InternalBusinessCategoryModel";

export default async function createInternalBusinessCategory (parent: any, args: InternalBusinessCategory): Promise<InternalBusinessCategory> {
    return await InternalBusinessCategoryModel.createOne(args)   
}