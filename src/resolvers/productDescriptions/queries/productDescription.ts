import { ProductDescriptionIdArgs, ProductDescription } from "../types";
import ProductDescriptionModel from "../ProductDescriptionModel";

export default async function productDescription (parent: any, args: ProductDescriptionIdArgs, context: any): Promise<ProductDescription> | never {
    
    let result!: ProductDescription;
    const productDescriptionId: string = args.id;

    try {
        result = await ProductDescriptionModel.findOne(context.prisma.product_descriptions, productDescriptionId);
    } catch (error: unknown) {
        new Error(`There was an error getting ProductDescription with ID ${productDescriptionId}.`);
    }

    if (!result) {
        new Error(`There is no ProductDescription with ID ${productDescriptionId}.`);
    }

    return result;


}