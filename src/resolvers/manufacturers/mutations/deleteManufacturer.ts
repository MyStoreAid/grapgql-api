import moment from 'moment';

export default async function deleteManufacturer (parent:any, args:any, context:any, info:any) {
    const { id } = await context.prisma.manufacturers.findUnique({ where: { id: args.id } });
    const currentTime = moment().toDate().getTime()

    if(!id) throw new Error("Invalid ID");

    return await context.prisma.manufacturers.update({
        where: {
            id: args.id
        },
        data: {
            deleted : true,
            updated_at: currentTime,
            last_modified: currentTime, 

        }
    })
}