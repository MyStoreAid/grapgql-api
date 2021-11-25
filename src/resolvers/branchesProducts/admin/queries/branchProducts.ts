import { AdminFindBranchProductArgs, BranchProduct } from "../../types";
import { Product } from "../../../../resolvers/products/types";
import { UserBranch } from "../../../../resolvers/userBranches/types";
import { BranchesProduct as BranchesProductModel, UserBranch as UserBranchModel } from "@mystoreaid/prisma-models";

export default async function branchProducts(parent: any, args: AdminFindBranchProductArgs): Promise<Array<Product>> | never {
    const userId: string = args.userId;
    const companyId: string = args.companyId;
    const branchId: string = args.branchId;
    let products: Array<Product> = [];

    try{
        const condition: any = { AND: [{ userId: userId }, { companyId: companyId } , { branchId: branchId } ] };
        const include: any = { branches: true };
        const existingUserBranch: UserBranch = await UserBranchModel.findOneWhereForeignKey(condition, include);

        if (existingUserBranch){
            const existingBranchProducts: Array<BranchProduct> = await BranchesProductModel.findManyWhereForeignKey({ branchId: branchId }, { products: true });
            
            for (let branchProduct of existingBranchProducts){
                products.push(branchProduct.products)
            }
            
            return products;
            
        }
        else {
            throw new Error (`There exists no Branch with User ID ${userId}, Company ID ${companyId} and Branch ID ${branchId}`);
        }
    }
    catch(error: any){
        throw new Error (`There was an error updating Branch with User ID ${userId}, Company ID ${companyId} and Branch ID ${branchId}`)
    }
}