import { BusinessCategory } from "../types";

export default async function businessCategories (parent: any, args: BusinessCategory, context: any): Promise<BusinessCategory[]> {
    return context.prisma.business_categories.findMany();
}