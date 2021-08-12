export default async function permissions (parent: any, args: any, context: any) {
    return context.prisma.permissions.findMany();
}