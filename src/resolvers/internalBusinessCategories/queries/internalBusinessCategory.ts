import { InternalBusinessCategoryIdArgs, InternalBusinessCategory } from "../types";

export default async function internalBusinessCategory (parent: any, args: InternalBusinessCategoryIdArgs, context: any): Promise<InternalBusinessCategory> | never {
    let result!: InternalBusinessCategory;
    const internalBusinessCategoryId: String = args.id;

    try {
        result = await context.prisma.internal_business_categories.findUnique({
            where: {
                id: internalBusinessCategoryId
            }
        });
    } catch (error: unknown) {
        new Error(`There was an error getting InternalBusinessCategory with ID ${internalBusinessCategoryId}.`);
    }

    if (!result) {
        new Error(`There is no InternalBusinessCategory with ID ${internalBusinessCategoryId}.`);
    }

    return result;

}