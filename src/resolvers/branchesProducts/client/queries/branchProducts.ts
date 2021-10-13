import { BranchesProduct as BranchesProductModel} from "@mystoreaid/prisma-models"
import { BranchProduct, FindBranchProductsArgs } from "../../../../resolvers/branchesProducts/types";
import { Product } from "../../../../resolvers/products/types";

export default async function branchProducts(parent: any, args: FindBranchProductsArgs): Promise<Product[]> {
    let exisitngBranchProducts: Array<BranchProduct> = [];
    let branchProducts: Array<Product> = [];

    const branchId: string = args.branchId;

    try {
        exisitngBranchProducts = await BranchesProductModel.findManyWhereForeignKey({ branchId: branchId}, { products: true });
    }
    catch(error: any) {
        throw new Error(`There was an error find Branch Products for Branch with ID ${branchId}`);
    }

    if(exisitngBranchProducts.length > 0) {
        for (let branchProduct of exisitngBranchProducts) {
            branchProducts.push(branchProduct.products);
        }
        return branchProducts;
    } 

    throw new Error(`There exists no Branch Product for Branch with ID ${branchId}`);
}