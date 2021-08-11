  
import moment from 'moment';

export default async function deleteClient (parent:any, args:any, context:any, info:any) {
    const { name } = await context.prisma.clients.findUnique({ where: { name: args.name }});

    if(!name) throw new Error("Invalid ID!");


    return await context.prisma.clients.update({
        where: {
            name: args.name
        },
        data: {
            deleted : true,
            updated_at: moment().toDate().getTime(),

        }
    })
}