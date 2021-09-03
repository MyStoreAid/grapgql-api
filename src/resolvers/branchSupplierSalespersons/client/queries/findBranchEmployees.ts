import { findBranchEmployeeArgs, BranchSupplierSalesperson } from "../../types";
import BranchSupplierSalespersonModel from "../../BranchSupplierSalespersonModel";


export default async function findBranchEmployees (parent: any, args: findBranchEmployeeArgs): Promise<BranchSupplierSalesperson[]> {

    const data: {branchId: String, 
        include: {branch_suppliers: boolean, branches: boolean, users_branch_supplier_salespersons_createdByTousers: boolean, users_branch_supplier_salespersons_lastModifiedByTousers: boolean, branch_supplier_order_payment_installments:boolean, branch_supplier_orders: boolean}} = {
        branchId: args.branchId, 
        include: {
            branch_suppliers: true,
            branches: true, 
            users_branch_supplier_salespersons_createdByTousers: true,
            users_branch_supplier_salespersons_lastModifiedByTousers: true,
            branch_supplier_order_payment_installments:true,
            branch_supplier_orders: true,
        }
    }
    return await BranchSupplierSalespersonModel.findManyForeignKey(data);
}