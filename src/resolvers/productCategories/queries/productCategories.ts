export default async function productCategories (parent: any, args: any, context: any) {
    return await context.prisma.product_categories.findMany();
}