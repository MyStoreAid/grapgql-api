export default async function permission (parent:any, args:any, context:any, info:any ) {
    const res = await context.prisma.permissions.findUnique({
        where: {
            id: args.id
        }
    });

    if (!res.id) throw new Error("Invalid ID");
    return res;

}