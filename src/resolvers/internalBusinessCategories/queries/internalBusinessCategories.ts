export default async function internalBusinessCategories (parent: any, args: any, context: any) {
    return context.prisma.internal_business_categories.findMany();
}