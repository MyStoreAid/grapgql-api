
export default async function manufacturers (parent: any, args: any, context: any) {
    return context.prisma.manufacturers.findMany();
}