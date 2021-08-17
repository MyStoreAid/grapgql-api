import { InternalBusinessCategory } from "../types";
import InternalBusinessCategoryModel from "../InternalBusinessCategoryModel";

export default async function createInternalBusinessCategory (parent: any, args: InternalBusinessCategory, context: any): Promise<InternalBusinessCategory> {
    return await InternalBusinessCategoryModel.createOne(context.prisma.internal_business_categories, args)   
}