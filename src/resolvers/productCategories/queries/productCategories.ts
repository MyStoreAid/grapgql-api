import { ProductCategory } from "../types";
import ProductCategoryModel from "../ProductCategoryModel";

export default async function productCategories (parent: any, args: ProductCategory, context: any): Promise<ProductCategory[]> {
    return await ProductCategoryModel.findMany(context.prisma.product_categories);
}