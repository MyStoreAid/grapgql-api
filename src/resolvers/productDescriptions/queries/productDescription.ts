export default async function productDescription (parent:any, args:any, context:any, info:any ) {
    return await context.prisma.product_descriptions.findUnique({
        where: {
            id: args.id
        }
    });

}