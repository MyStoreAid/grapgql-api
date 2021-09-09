import { Product } from "../../types";
import { Product as ProductModel } from "@mystoreaid/prisma-models";

export default async function products (parent: any, args: Product): Promise<Product[]> {
    return await ProductModel.findMany();
}