import { ProductCategoryIdArgs, ProductCategory } from "../../types";
import { ProductCategory as ProductCategoryModel } from "@mystoreaid/prisma-models";

export default async function productCategory (parent: any, args: ProductCategoryIdArgs): Promise<ProductCategory> | never {

    let result!: ProductCategory;
    const productCategoryId: string = args.id;

    try {
        result = await ProductCategoryModel.findOne(productCategoryId);
    } catch (error: unknown) {
        new Error(`There was an error getting ProductCategory with ID ${productCategoryId}.`);
    }

    if (!result) {
        new Error(`There is no ProductCategory with ID ${productCategoryId}.`);
    }

    return result;

}