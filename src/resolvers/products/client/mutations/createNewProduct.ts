import { 
    Product as ProductModel,
    Branch as BranchModel,
    ProductCategory as ProductCategoryModel,
    BranchesProduct as BranchesProductModel,
    ProductProductSegmentEntry as ProductProductSegmentEntryModel
 } from "@mystoreaid/prisma-models";
import { Branch } from "../../../../resolvers/branches/types";
import { Product, NewProductArgs, ProductArgs, BranchProductArgs } from "resolvers/products/types";
import { ProductCategory } from "resolvers/productCategories/types";
import { BranchProduct } from "resolvers/branchesProducts/types";

export default async function createNewProduct(parent: any, args: NewProductArgs): Promise<Product> | never {
    const branchId: string = args.branchId;
    const product: ProductArgs = args.product;
    const branchProduct: BranchProductArgs = args.branchProduct;
    let existingBranch: Branch;
    let newProduct: Product;

    try {
        existingBranch = await BranchModel.findOne(branchId);
    }
    catch(error: any) {
        throw new Error(`There exists no Branch with ID ${branchId}`);
    }

    if(existingBranch){
        product.isTemporary = true;
        if(!product.productCategoryId) {
            const condition: any = { AND: [ { name: "Others"}, { NOT: [ { parentId: null } ] } ] };
            const otherProductCategory: ProductCategory = await ProductCategoryModel.findOneWhere(condition);
            if(otherProductCategory && otherProductCategory.id){
                product.productCategoryId = otherProductCategory.id;
            }
        }

        try{
            const include: any = {
                brands: true,                             
                product_descriptions: true,               
                users: true,                               
                manufacturers: true,                      
                measurement_units: true,                   
                product_categories: true,               
                product_segments: true,                   
                audit_entries: true,
                branch_supplier_products: true,
                branches_products: true,
                branches_products_stock_movements: true,
                branches_products_stocks: true,
                branches_products_stocks_histories: true,
                product_product_segment_entries: true,
                sale_entries: true,
                sale_return_histories: true,
                stock_return_histories: true,
            }

            const params: any = { data: product, include: include };
            newProduct = await ProductModel.createOneForeignKey(params);
        }
        catch(error: any){
            throw new Error(`There was an error creating Product`);
        }

        if(product.productSegmentEntryId || product.productSegmentEntryIds) {
            const productSegmentData: any = {
                products: { connect: { id: newProduct.id}},
                product_segment_entries: product.productSegmentEntryId ? { connect: { id: product.productSegmentEntryId}} : product.productSegmentEntryIds ? { connect: { id: product.productSegmentEntryIds[0]} } : undefined
            }

            await ProductProductSegmentEntryModel.createOne(productSegmentData);
        }

        const branchProductData: any = JSON.parse(JSON.stringify(branchProduct));
        branchProductData.branches = { connect: { id: branchId } };
        branchProductData.products = { connect: { id: newProduct.id } };
        delete branchProductData.productId;
        delete branchProductData.branchId;
        
        await BranchesProductModel.createOne(branchProductData);

        return newProduct;
    }

    throw new Error(`There was an error creating temporary product`);
}