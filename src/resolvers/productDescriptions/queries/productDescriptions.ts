export default async function productDescriptions (parent: any, args: any, context: any) {
    return await context.prisma.product_descriptions.findMany();
}