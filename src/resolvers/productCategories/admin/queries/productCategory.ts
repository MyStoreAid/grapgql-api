import { ProductCategoryIdArgs, ProductCategory } from "../../types";
import ProductCategoryModel from "../../ProductCategoryModel";

export default async function productCategory (parent: any, args: ProductCategoryIdArgs, context: any): Promise<ProductCategory> | never {

    let result!: ProductCategory;
    const productCategoryId: string = args.id;

    try {
        result = await ProductCategoryModel.findOne(context.prisma.product_categories, productCategoryId);
    } catch (error: unknown) {
        new Error(`There was an error getting ProductCategory with ID ${productCategoryId}.`);
    }

    if (!result) {
        new Error(`There is no ProductCategory with ID ${productCategoryId}.`);
    }

    return result;

}