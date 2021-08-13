import { ProductCategory } from "../types";

export default async function productCategories (parent: any, args: ProductCategory, context: any): Promise<ProductCategory[]> {
    return await context.prisma.product_categories.findMany();
}