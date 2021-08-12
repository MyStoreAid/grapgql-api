export default async function clients (parent: any, args: any, context: any) {
    return context.prisma.clients.findMany();
}