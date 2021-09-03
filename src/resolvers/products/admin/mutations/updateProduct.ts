import { Product } from '../../types';
import ProductModel from '../../ProductModel';


export default async function updateProduct (parent: any, args: Product): Promise<Product> | never{
    
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

    const data = {
        name: args.name,
        summary: args.summary,
        barCode: args.barCode,
        weight: args.weight,
        image: args.image,
        adminLastModifiedBy: args.adminLastModifiedBy,
        lastModifiedBy: args.lastModifiedBy ? { connect: { id: args.lastModifiedBy }}: undefined,

    };
    
    return await ProductModel.updateOne(productId, data)
}