
export default async function internalBusinessCategory (parent:any, args:any, context:any, info:any ) {
    const res = await context.prisma.internal_business_categories.findUnique({
        where: {
            id: args.id
        }
    });

    if (!res.id) throw new Error("Invalid ID");
    return res;

}