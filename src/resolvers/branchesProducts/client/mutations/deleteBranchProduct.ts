import BranchesProductModel from "../../../../resolvers/branchesProducts/BranchesProductModel";
import { AssignBranchProduct, BranchProduct } from "../../../../resolvers/branchesProducts/types";

export default async function deleteBranchProduct(parent: any, args: AssignBranchProduct): Promise<BranchProduct> {
    let existingBranchProduct: BranchProduct;

    const branchId: string = args.branchId;
    const productId: string = args.productId;

    try {
        existingBranchProduct = await BranchesProductModel.findOneWhere({ AND: [ { branchId: branchId}, { productId: productId} ] });
    }
    catch(error: any) {
        throw new Error(`There was an Error find Branch Product with Branch ID ${branchId} and Product ID ${productId}`);
    }

    if (existingBranchProduct) {
        return BranchesProductModel.deleteOneForeignKey(existingBranchProduct.id, {
            branches: true,
            products: true
        })
    }
    throw new Error(`There exists no Branch Product with Branch ID ${branchId} and Product ID ${productId}`);
}