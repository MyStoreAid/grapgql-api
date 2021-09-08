import BranchModel from "../../../../resolvers/branches/BranchModel";
import { Branch } from "../../../../resolvers/branches/types";
import BranchesProductModel from "../../../../resolvers/branchesProducts/BranchesProductModel";
import { AssignBranchProduct, BranchProduct } from "../../../../resolvers/branchesProducts/types";
import ProductModel from "../../../../resolvers/products/ProductModel";
import { Product } from "../../../../resolvers/products/types";

export default async function assignBranchProduct(parent: any, args: AssignBranchProduct): Promise<BranchProduct> {
    let existingBranch: Branch;
    let existingProduct: Product;

    const branchId: string = args.branchId;
    const productId: string = args.productId;

    try {
        existingBranch = await BranchModel.findOne(branchId);
    }
    catch(error: any) {
        throw new Error(`There was an error finding Branch with Branch ID ${branchId}`);
    }

    try {
        existingProduct = await ProductModel.findOne(productId);
    }
    catch(error: any) {
        throw new Error(`There was an error find Product with Product ID ${productId}`);
    }

    if(existingBranch && existingProduct) {
        const data: any = {
            data: {
                branches: { connect: { id: branchId } },
                products: { connect: { id: productId } }
            },
            include: {
                branches: true,
                products: true,
            }
        }

        return await BranchesProductModel.createOneForeignKey(data);
    }

    throw new Error(`Product with ID ${productId} does not exist / Branch with ID ${branchId} does not exist`);
}