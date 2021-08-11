export default async function feature (parent:any, args:any, context:any, info:any ) {
    const res = await context.prisma.features.findUnique({
        where: {
            id: args.id
        }
    });

    if (!res.id) throw new Error("Invalid ID");
    return res;

}