export default async function roles (parent: any, args: any, context: any) {
    return context.prisma.roles.findMany();
}