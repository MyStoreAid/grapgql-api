import { AdminAssignBranchProductCategory, BranchProductCategory } from "../../../../resolvers/branchProductCategories/types";
import { UserBranch } from "../../../../resolvers/userBranches/types";
import { BranchProductCategory as BranchProductCategoryModel, UserBranch as UserBranchModel } from "@mystoreaid/prisma-models";

export default async function branchProducts(parent: any, args: AdminAssignBranchProductCategory): Promise<BranchProductCategory> | never {
    const userId: string = args.userId;
    const companyId: string = args.companyId;
    const branchId: string = args.branchId;
    const productCategoryId: string = args.productCategoryId;

    try{
        const condition: any = { AND: [{ userId: userId }, { companyId: companyId } , { branchId: branchId } ] };
        const include: any = { branches: true };
        const existingUserBranch: UserBranch = await UserBranchModel.findOneWhereForeignKey(condition, include);

        if (existingUserBranch){
            const existingBranchProductCategory: BranchProductCategory = await BranchProductCategoryModel.findOneWhere({ AND: [ { branchId: branchId }, { productCategoryId: productCategoryId } ] });
            if (existingBranchProductCategory){
                throw new Error (`Branch Product Cateogry already exists`);
            }
            else {
                const include: any = { 
                    product_categories: true,
                    branches: true
                }

                const data: any = {
                    branches: { connect: { id: branchId} },
                    product_categories: { connect: { id: productCategoryId } }
                }
                const params: any = { data: data, include: include };
                const branchProductCategory: BranchProductCategory = await BranchProductCategoryModel.createOneForeignKey(params);
                return branchProductCategory;
            }
            
        }
        else {
            throw new Error (`There exists no Branch with User ID ${userId}, Company ID ${companyId} and Branch ID ${branchId}`);
        }
    }
    catch(error: any){
        throw new Error (`There was an error updating Branch with User ID ${userId}, Company ID ${companyId} and Branch ID ${branchId}`)
    }
}