import { AdminAssignBranchProduct, BranchProduct } from "../../../branchesProducts/types";
import { UserBranch } from "../../../../resolvers/userBranches/types";
import { BranchesProduct as BranchesProductModel, UserBranch as UserBranchModel } from "@mystoreaid/prisma-models";

export default async function assignBranchProduct(parent: any, args: AdminAssignBranchProduct): Promise<BranchProduct> | never {
    const userId: string = args.userId;
    const companyId: string = args.companyId;
    const branchId: string = args.branchId;
    const productId: string = args.productId;

    try{
        const condition: any = { AND: [{ userId: userId }, { companyId: companyId } , { branchId: branchId } ] };
        const include: any = { branches: true };
        const existingUserBranch: UserBranch = await UserBranchModel.findOneWhereForeignKey(condition, include);

        if (existingUserBranch){
            const existingBranchProduct: BranchProduct = await BranchesProductModel.findOneWhere({ AND: [ { branchId: branchId }, { productId: productId } ] });
            if (existingBranchProduct){
                throw new Error (`Branch Product already exists`);
            }
            else {
                const include: any = { 
                    products: true,
                    branches: true
                }

                const data: any = {
                    branches: { connect: { id: branchId} },
                    products: { connect: { id: productId } }
                }
                const params: any = { data: data, include: include };
                const branchProduct: BranchProduct = await BranchesProductModel.createOneForeignKey(params);
                return branchProduct;
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