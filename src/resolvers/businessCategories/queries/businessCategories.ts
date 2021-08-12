export default async function businessCategories (parent: any, args: any, context: any) {
    return context.prisma.business_categories.findMany();
}