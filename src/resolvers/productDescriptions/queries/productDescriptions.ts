import { ProductDescription } from "../types";
import ProductDescriptionModel from "../ProductDescriptionModel";

export default async function productDescriptions (parent: any, args: ProductDescription, context: any): Promise<ProductDescription[]> {
    return await ProductDescriptionModel.findMany(context.prisma.product_descriptions);
}