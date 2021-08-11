export default async function client (parent:any, args:any, context:any, info:any ) {
    const res = await context.prisma.clients.findUnique({
        where: {
            id: args.id
        }
    });

    if (!res.id) throw new Error("Invalid ID");
    return res;

}