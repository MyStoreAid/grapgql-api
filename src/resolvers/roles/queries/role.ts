export default async function role (parent:any, args:any, context:any, info:any ) {
    const res = await context.prisma.roles.findUnique({
        where: {
            id: args.id
        }
    });

    if (!res.id) throw new Error("Invalid ID");
    return res;

}