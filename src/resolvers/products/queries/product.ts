import { ProductIdArgs, Product } from "../types";
import ProductModel from "../ProductModel";

export default async function product (parent: any, args: ProductIdArgs, context: any): Promise<Product> | never {
    
    let result!: Product;
    const productId: string = args.id;

    try {
        result = await ProductModel.findOne(context.prisma.products, productId);
    } catch (error: unknown) {
        new Error(`There was an error getting Product with ID ${productId}.`);
    }

    if (!result) {
        new Error(`There is no Product with ID ${productId}.`);
    }

    return result;


}