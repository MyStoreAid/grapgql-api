import { ProductCategoryIdArgs, ProductCategory } from "../types";

export default async function productCategory (parent: any, args: ProductCategoryIdArgs, context: any): Promise<ProductCategory> | never {

    let result!: ProductCategory;
    const productCategoryId: String = args.id;

    try {
        result = await context.prisma.product_categories.findUnique({
            where: {
                id: productCategoryId
            }
        });
    } catch (error: unknown) {
        new Error(`There was an error getting ProductCategory with ID ${productCategoryId}.`);
    }

    if (!result) {
        new Error(`There is no ProductCategory with ID ${productCategoryId}.`);
    }

    return result;

}