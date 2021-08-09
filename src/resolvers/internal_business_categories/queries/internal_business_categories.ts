export default async function internal_business_categories (parent: any, args: any, context: any) {
    return context.prisma.internal_Business_Categories.findMany();
}