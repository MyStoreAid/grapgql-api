import { BusinessCategory, BusinessCategoryIdArgs } from "../types";

export default async function businessCategory (parent: any, args: BusinessCategoryIdArgs, context: any, info: any): Promise<BusinessCategory> | never {
    let result! : BusinessCategory;
    const businessCategoryId: String = args.id;

    try {
        result = await context.prisma.business_categories.findUnique({
            where: {
                id: businessCategoryId
            }
        });
    } catch (error: unknown) {
        new Error(`There was an error getting business category with ID ${businessCategoryId}.`);
    }

    if (!result) {
        new Error(`There is no business category with ID ${businessCategoryId}.`);
    }


    return result;

}