
export default async function brands (parent: any, args: any, context: any) {
    return context.prisma.brands.findMany();
}