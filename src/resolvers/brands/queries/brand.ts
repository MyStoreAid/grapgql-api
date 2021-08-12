
export default async function brand (parent:any, args:any, context:any, info:any ) {

    const res = await context.prisma.brands.findUnique({
        where: {
            id: args.id
        }
    });

    if(!res.id) throw new Error("Invalid ID");

    return res;

}