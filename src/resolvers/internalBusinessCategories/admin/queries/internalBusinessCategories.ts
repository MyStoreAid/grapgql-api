import { InternalBusinessCategory } from "../../types";
import InternalBusinessCategoryModel from "../../InternalBusinessCategoryModel";

export default async function internalBusinessCategories (parent: any, args: InternalBusinessCategory, context: any): Promise<InternalBusinessCategory[]> {
    return InternalBusinessCategoryModel.findMany(context.prisma.internal_business_categories)
}