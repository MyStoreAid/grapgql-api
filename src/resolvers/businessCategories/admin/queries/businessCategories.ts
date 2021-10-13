import { BusinessCategory } from "../../types";
import { BusinessCategory as BusinessCategoryModel } from "@mystoreaid/prisma-models";

export default async function businessCategories (parent: any, args: BusinessCategory, context: any): Promise<BusinessCategory[]> {
    return BusinessCategoryModel.findManyForeignKey({
        braches: true,
        companies: true,
    });
}