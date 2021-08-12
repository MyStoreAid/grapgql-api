export default async function client (parent:any, args:any, context:any, info:any ) {
    const res = await context.prisma.clients.findUnique({
        where: {
            name: args.name
        }
    });

    if (!res.name) throw new Error("Invalid ID");
    return res;

}