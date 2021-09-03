import { ProductDescription } from "../../types";
import ProductDescriptionModel from "../../ProductDescriptionModel";

export default async function productDescriptions (parent: any, args: ProductDescription): Promise<ProductDescription[]> {
    return await ProductDescriptionModel.findMany();
}