
export default async function brands (parent: any, args: any, context: any) {
    return await context.prisma.brands.findMany();
}