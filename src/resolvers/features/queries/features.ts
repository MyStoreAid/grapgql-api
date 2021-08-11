export default async function features (parent: any, args: any, context: any) {
    return context.prisma.features.findMany();
}