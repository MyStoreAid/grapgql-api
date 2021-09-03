import { InternalBusinessCategory } from "../../types";
import InternalBusinessCategoryModel from "../../InternalBusinessCategoryModel";

export default async function internalBusinessCategories (parent: any, args: InternalBusinessCategory): Promise<InternalBusinessCategory[]> {
    return InternalBusinessCategoryModel.findMany()
}