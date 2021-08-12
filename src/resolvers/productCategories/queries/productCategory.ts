export default async function productCategory (parent:any, args:any, context:any, info:any ) {

    const res = await context.prisma.product_categories.findUnique({
        where: {
            id: args.id
        }
    });

    if(!res.id) throw new Error("Invalid ID");

    return res;

}