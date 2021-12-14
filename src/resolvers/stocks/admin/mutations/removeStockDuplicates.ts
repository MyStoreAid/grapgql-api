import { RemoveStockDuplicatesArgs, BranchProductsStock } from "../../types";
import { UserBranch } from "../../../../resolvers/userBranches/types";
import { User } from "../../../../resolvers/users/types";
import { UserBranch as UserBranchModel, 
        BranchesProduct as BranchesProductModel,
        Product as ProductModel,
        BranchProductStock as BranchProductStockModel
} from "@mystoreaid/prisma-models";

import { BranchProduct } from "../../../../resolvers/branchesProducts/types";
import { Product } from "../../../../resolvers/products/types";

export default async function assignUserBranch(parent: any, args: RemoveStockDuplicatesArgs): Promise<String> | never{
    const userId: string = args.userId;
    const branchId: string = args.branchId;
    const companyId: string = args.companyId;
    const action: string  = args.action;
    let productIdsToRemove: Array<string> = [];

    try {
        
        const condition: any = { AND: [ { userId: userId }, { branchId: branchId }, { companyId: companyId}  ] };
        const existingUserBranch: UserBranch = await UserBranchModel.findOneWhere(condition);

        if(existingUserBranch) {
            if (action === "all") {
                const allProductIds: Array<BranchProduct>  = await BranchesProductModel.findManyWhere({branchId: branchId});
                for (let i = 0; i < allProductIds.length; i ++){
                    productIdsToRemove.push(allProductIds[i].productId)
                }
            }
            else {
                const product: Product = await ProductModel.findOneWhere({name: action});
                productIdsToRemove.push(product.id);
            }

            for (let j = 0; j < productIdsToRemove.length; j ++) {
                await BranchProductStockModel.removeDuplicates(productIdsToRemove[j]);
            }
        }

        return `Succesfully removed duplicates in ${action} - ${branchId}`;


    }
    catch(error: any) {
        throw new Error(`There was an error assigning user with ${userId} to Branch with Branch ID ${branchId}`);
    }
}
