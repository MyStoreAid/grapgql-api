import moment from 'moment';

export default async function deleteBusinessCategory (parent:any, args:any, context:any, info:any) {
    const { id } = await context.prisma.business_categories.findUnique({ where: { id: args.id }});


    if(!id) throw new Error("Invalid ID!");


    return await context.prisma.business_categories.update({
        where: {
            id: args.id
        },
        data: {
            deleted : true,
            updated_at: moment().toDate().getTime(),

        }
    })
}