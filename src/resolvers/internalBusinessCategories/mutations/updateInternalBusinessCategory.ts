import { InternalBusinessCategory } from "../types";
import TimeHelper from '../../../helpers/TimeHelper';

export default async function updateInternalBusinessCategory (parent: any, args: InternalBusinessCategory, context: any): Promise<InternalBusinessCategory> | never{
    let existingInternalBusinessCategory!: InternalBusinessCategory;
    const internalBusinessCategoryId: String = args.id;
    const currentTime: number = TimeHelper.currentTime;

    try {
        existingInternalBusinessCategory = await context.prisma.internal_business_categories.findUnique({ where: {id: internalBusinessCategoryId } });
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching InternalBusinessCategory with ID ${internalBusinessCategoryId}`);
    }

    if(!existingInternalBusinessCategory) {
        throw new Error(`There is no InternalBusinessCategory with ID ${internalBusinessCategoryId}`);
    }

    return await context.prisma.internal_business_categories.update({
        where: {
            id: internalBusinessCategoryId
        },
        data: {
            name: args.name,
            description: args.description,
            updated_at: currentTime,

        }
    });
}