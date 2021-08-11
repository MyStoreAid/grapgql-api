import moment from 'moment';

export default async function deleteFeature (parent:any, args:any, context:any, info:any) {
    const { id } = await context.prisma.features.findUnique({ where: { id: args.id }});

    if(!id) throw new Error("Invalid ID!");


    return await context.prisma.features.update({
        where: {
            id: args.id
        },
        data: {
            deleted : true,
            updated_at: moment().toDate().getTime(),

        }
    })
}