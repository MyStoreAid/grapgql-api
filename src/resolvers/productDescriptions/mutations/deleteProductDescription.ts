import moment from 'moment';

export default async function deleteProductDescription (parent:any, args:any, context:any, info:any) {
    const {id } = await context.prisma.product_descriptions.findUnique({ where: { id: args.id } });

    if (!id) throw new Error("Invalid ID");

    return await context.prisma.product_descriptions.update({
        where: {
            id: args.id
        },
        data: {
            deleted : true,
            last_modified: moment().toDate().getTime(),

        }
    })
}