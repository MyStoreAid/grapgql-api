import { Product } from "../../types";
import ProductModel from "../../ProductModel";

export default async function products (parent: any, args: Product, context: any): Promise<Product[]> {
    return await ProductModel.findMany(context.prisma.products);
}