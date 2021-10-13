import { ProductIdArgs, Product } from '../../types';
import { Product as ProductModel } from "@mystoreaid/prisma-models";

export default async function deleteProduct (parent: any, args: ProductIdArgs): Promise<Product> | never {
   
    let existingProduct!: Product;
    const productId: string = args.id;

    try {
        existingProduct = await ProductModel.findOne(productId);
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching Product with ID ${productId}`);
    }

    if(!existingProduct) {
        throw new Error(`There is no Product with ID ${productId}`);
    }

    return await ProductModel.deleteOne(productId)
}