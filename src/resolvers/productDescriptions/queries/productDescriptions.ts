import { ProductDescription } from "../types";

export default async function productDescriptions (parent: any, args: ProductDescription, context: any): Promise<ProductDescription> {
    return await context.prisma.product_descriptions.findMany();
}