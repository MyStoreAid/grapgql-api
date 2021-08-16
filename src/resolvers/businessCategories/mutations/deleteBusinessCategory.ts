import { BusinessCategory,BusinessCategoryIdArgs } from "../types";
import TimeHelper from '../../../helpers/TimeHelper';



export default async function deleteBusinessCategory (parent: any, args: BusinessCategoryIdArgs, context: any): Promise<BusinessCategory> | never {
    let existingBusinessCategory!: BusinessCategory;
    const businessCategoryId: String = args.id;

    try {
        existingBusinessCategory = await context.prisma.business_categories.findUnique({ where: {id: businessCategoryId}});
    } catch (error: unknown) {
        console.error(error);
        throw new Error(`There is an error fetching a business category with ID ${businessCategoryId}`);
    }

    if(!existingBusinessCategory) {
        throw new Error(`There is no business category with ID ${businessCategoryId}`);
    }

    return await context.prisma.business_categories.update({
        where: {
            id: businessCategoryId
        },
        data: {
            deleted : true,
            updated_at: TimeHelper.currentTime,

        }
    })
}