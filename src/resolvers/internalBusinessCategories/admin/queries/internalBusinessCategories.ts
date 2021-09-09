import { InternalBusinessCategory } from "../../types";
import { InternalBusinessCategory as InternalBusinessCategoryModel } from "@mystoreaid/prisma-models";

export default async function internalBusinessCategories (parent: any, args: InternalBusinessCategory): Promise<InternalBusinessCategory[]> {
    return InternalBusinessCategoryModel.findMany()
}