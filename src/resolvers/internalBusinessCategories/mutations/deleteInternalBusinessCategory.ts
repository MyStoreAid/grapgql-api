import { InternalBusinessCategory,InternalBusinessCategoryIdArgs } from "../types";
import TimeHelper from '../../../helpers/TimeHelper';

export default async function deleteInternalBusinessCategory (parent: any, args: InternalBusinessCategory, context: any): Promise<InternalBusinessCategory> | never {
    let existingInternalBusinessCategory!: InternalBusinessCategory;
    const internalBusinessCategoryId: String = args.id;

    try {
        existingInternalBusinessCategory = await context.prisma.internal_business_categories.findUnique({ where: {id: internalBusinessCategoryId}});
    } catch (error: unknown) {
        console.error(error);
        throw new Error(`There is an error fetching a InternalBusinessCategory with ID ${internalBusinessCategoryId}`);
    }

    if(!existingInternalBusinessCategory) {
        throw new Error(`There is no InternalBusinessCategory with ID ${internalBusinessCategoryId}`);
    }


    return await context.prisma.internal_business_categories.update({
        where: {
            id: args.id
        },
        data: {
            deleted : true,
            updated_at: TimeHelper.currentTime,

        }
    })
}