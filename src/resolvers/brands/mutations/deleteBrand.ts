import moment from 'moment';

export default async function deleteBrand (parent:any, args:any, context:any, info:any) {

    const { id } = context.prisma.brands.findUnique({ where: {id: args.id} });

    if(!id) throw new Error("Invalid ID");

    return await context.prisma.brands.update({
        where: {
            id: args.id
        },
        data: {
            deleted : true,
            last_modified: moment().toDate().getTime(),

        }
    })
}