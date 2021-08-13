import { ProductDescriptionIdArgs, ProductDescription } from "../types";

export default async function productDescription (parent: any, args: ProductDescriptionIdArgs, context: any): Promise<ProductDescription> | never {
    
    let result!: ProductDescription;
    const productDescriptionId: String = args.id;

    try {
        result = await context.prisma.product_descriptions.findUnique({
            where: {
                id: productDescriptionId
            }
        });
    } catch (error: unknown) {
        new Error(`There was an error getting ProductDescription with ID ${productDescriptionId}.`);
    }

    if (!result) {
        new Error(`There is no ProductDescription with ID ${productDescriptionId}.`);
    }

    return result;


}