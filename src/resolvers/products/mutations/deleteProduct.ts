import { ProductIdArgs, Product } from '../types';
import ProductModel from '../ProductModel';

export default async function deleteProduct (parent: any, args: ProductIdArgs, context: any): Promise<Product> | never {
   
    let existingProduct!: Product;
    const productId: string = args.id;

    try {
        existingProduct = await ProductModel.findOne(context.prisma.products, productId);
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching Product with ID ${productId}`);
    }

    if(!existingProduct) {
        throw new Error(`There is no Product with ID ${productId}`);
    }

    return await ProductModel.deleteOne(context.prisma.products, productId)
}