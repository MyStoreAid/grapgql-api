import { Purchase, FindPurchaseArgs } from "resolvers/purchases/types";
import { UserBranch as UserBranchModel, Model} from '@mystoreaid/prisma-models';
import { UserBranch } from "../../../../resolvers/userBranches/types";

export default async function purchases(parent: any, args: FindPurchaseArgs): Promise<any> | never {
    const userId: string = args.userId;
    const companyId: string = args.companyId;
    const branchId: string = args.branchId;

    try{
        const condition: any = { AND: [{ userId: userId }, { companyId: companyId } , { branchId: branchId } ] };
        const include: any = { branches: true };
        const existingUserBranch: UserBranch = await UserBranchModel.findOneWhereForeignKey(condition, include);

        if (existingUserBranch){
            const query: string = `select distinct on (branches_products_stocks.id) branches_products_stocks.id,
            branches_products_stocks.quantity,
            branches_products_stocks."costPrice",
            branches_products_stocks.type,
            branches_products_stocks.created_at,
            branches_products_stocks.updated_at,
            branches_products."sellingPrice",
            products.name as product,
            product_categories.name as product_category_name,
            (select row_to_json("r*") from (select * from users where users."userId" = branches_products_stocks."lastModifiedBy") as "r*") as modifier,
            count(*) OVER() AS full_count from branches_products_stocks 
            inner join branches_products on branches_products_stocks."productId" =
              branches_products."productId" and branches_products_stocks."branchId" = branches_products."branchId"
            inner join products on products.id = branches_products_stocks."productId" 
            left outer join product_categories on product_categories."id" = products."productCategoryId" 
            left outer join users on users."userId" = branches_products_stocks."lastModifiedBy"
            where branches_products_stocks."branchId" = '${branchId}' and branches_products."branchId" = '${branchId}' 
            and branches_products_stocks.deleted = false `
            
            const purchases: any = await Model.queryRaw(query);
            return purchases;
        }
        else {
            throw new Error (`There exists no Branch with User ID ${userId}, Company ID ${companyId} and Branch ID ${branchId}`);
        }
    }
    catch(error: any){
        throw new Error (`There was an error updating Branch with User ID ${userId}, Company ID ${companyId} and Branch ID ${branchId}`)
    }
}