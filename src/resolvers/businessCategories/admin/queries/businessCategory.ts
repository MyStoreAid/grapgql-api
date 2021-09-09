import { BusinessCategory, BusinessCategoryIdArgs } from "../../types";
import { BusinessCategory as BusinessCategoryModel } from "@mystoreaid/prisma-models";

export default async function businessCategory (parent: any, args: BusinessCategoryIdArgs, context: any, info: any): Promise<BusinessCategory> | never {
    let result! : BusinessCategory;
    const businessCategoryId: string = args.id;

    try {
        result = await BusinessCategoryModel.findOne(businessCategoryId)
    } catch (error: unknown) {
        new Error(`There was an error getting business category with ID ${businessCategoryId}.`);
    }

    if (!result) {
        new Error(`There is no business category with ID ${businessCategoryId}.`);
    }


    return result;

}