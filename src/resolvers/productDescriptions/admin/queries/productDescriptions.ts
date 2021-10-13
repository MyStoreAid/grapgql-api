import { ProductDescription } from "../../types";
import { ProductDescription as ProductDescriptionModel } from "@mystoreaid/prisma-models";

export default async function productDescriptions (parent: any, args: ProductDescription): Promise<ProductDescription[]> {
    return await ProductDescriptionModel.findMany();
}