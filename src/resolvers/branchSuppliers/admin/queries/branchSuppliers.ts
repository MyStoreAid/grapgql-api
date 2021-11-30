import { FindBranchSupplierArgs, BranchSupplier } from "../../types";
import { UserBranch as UserBranchModel, 
    BranchSupplier as BranchSupplierModel,
    Supplier as SupplierModel
} from "@mystoreaid/prisma-models";
import { UserBranch } from "../../../../resolvers/userBranches/types";
import { Supplier } from "../../../../resolvers/suppliers/types";

export default async function branchSuppliers (parent: any, args: FindBranchSupplierArgs ): Promise<Array<Supplier>> | never {
    const userId: string = args.userId;
    const companyId: string = args.companyId;
    const branchId: string = args.branchId;
    let suppliers: Array<Supplier> = [];
 
    try{
        const condition: any = { AND: [{ userId: userId }, { companyId: companyId } , { branchId: branchId } ] };
        const include: any = { branches: true };
        const existingUserBranch: UserBranch = await UserBranchModel.findOneWhereForeignKey(condition, include);

        if (existingUserBranch){
            const supplierCondition: any = { branchId: branchId};
            const branchSuppliers: Array<BranchSupplier> = await BranchSupplierModel.findManyWhere(supplierCondition);
            
            for (let i = 0; i < branchSuppliers.length; i ++) {
                suppliers.push(await SupplierModel.findOne(branchSuppliers[i].supplierId));
            }

            return suppliers;
        }
        else {
            throw new Error (`There exists no Branch with User ID ${userId}, Company ID ${companyId} and Branch ID ${branchId}`);
        }
    }
    catch(error: any){
        throw new Error (`There was an error updating Branch with User ID ${userId}, Company ID ${companyId} and Branch ID ${branchId}`)
    }
}