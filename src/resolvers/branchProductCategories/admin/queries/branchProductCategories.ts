import { AdminBranchProductCategoriesArgs, BranchProductCategory } from "../../types";
import { ProductCategory } from "../../../productCategories/types";
import { UserBranch } from "../../../userBranches/types";
import { UserBranch as UserBranchModel, BranchProductCategory as BranchProductCategoryModel } from "@mystoreaid/prisma-models";

export default async function branchProductCategories(parent: any, args: AdminBranchProductCategoriesArgs): Promise<Array<ProductCategory>> | never {
    const userId: string = args.userId;
    const companyId: string = args.companyId;
    const branchId: string = args.branchId;
    let productCategories: Array<ProductCategory> = [];


    try{
        const condition: any = { AND: [{ userId: userId }, { companyId: companyId } , { branchId: branchId } ] };
        const include: any = { branches: true };
        const existingUserBranch: UserBranch = await UserBranchModel.findOneWhereForeignKey(condition, include);

        if (existingUserBranch){
            const include: any = { product_categories: true}
            const branchProductCategories: Array<BranchProductCategory> = await BranchProductCategoryModel.findManyWhereForeignKey({ branchId: branchId }, include);
            
            for (let branchProductCategory of branchProductCategories) {
                productCategories.push(branchProductCategory.product_categories)
            }

            return productCategories;
        }
        else {
            throw new Error (`There exists no Branch with User ID ${userId}, Company ID ${companyId} and Branch ID ${branchId}`);
        }
    }
    catch(error: any){
        throw new Error (`There was an error updating Branch with User ID ${userId}, Company ID ${companyId} and Branch ID ${branchId}`)
    }
}