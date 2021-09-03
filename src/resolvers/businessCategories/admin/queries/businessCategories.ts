import { BusinessCategory } from "../../types";
import BusinessCategoryModel from "../../BusinessCategoryModel";

export default async function businessCategories (parent: any, args: BusinessCategory, context: any): Promise<BusinessCategory[]> {
    return BusinessCategoryModel.findMany();
}