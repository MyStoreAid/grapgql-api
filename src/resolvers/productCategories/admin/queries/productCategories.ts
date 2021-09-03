import { ProductCategory } from "../../types";
import ProductCategoryModel from "../../ProductCategoryModel";

export default async function productCategories (parent: any, args: ProductCategory): Promise<ProductCategory[]> {
    return await ProductCategoryModel.findMany();
}