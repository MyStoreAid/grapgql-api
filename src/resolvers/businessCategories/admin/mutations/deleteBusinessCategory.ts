import { BusinessCategory,BusinessCategoryIdArgs } from "../../types";
import BusinessCategoryModel from "../../BusinessCategoryModel";



export default async function deleteBusinessCategory (parent: any, args: BusinessCategoryIdArgs, context: any): Promise<BusinessCategory> | never {
    let existingBusinessCategory!: BusinessCategory;
    const businessCategoryId: string = args.id;

    try {
        existingBusinessCategory = await BusinessCategoryModel.findOne(context.prisma.business_categories, businessCategoryId)
    } catch (error: unknown) {
        console.error(error);
        throw new Error(`There is an error fetching a business category with ID ${businessCategoryId}`);
    }

    if(!existingBusinessCategory) {
        throw new Error(`There is no business category with ID ${businessCategoryId}`);
    }

    return await BusinessCategoryModel.updateOne(context.prisma.business_categories, businessCategoryId, args)
}