import { InternalBusinessCategory } from "../types";

export default async function internalBusinessCategories (parent: any, args: InternalBusinessCategory, context: any) {
    return context.prisma.internal_business_categories.findMany();
}