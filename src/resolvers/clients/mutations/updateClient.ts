
import moment from 'moment';

export default async function updateClient (parent:any, args:any, context:any, info:any){

    const { id, name, displayName } = await context.prisma.clients.findUnique({ where: { id: args.id }});
    const currentTime = moment().toDate().getTime();

    if(!id) throw new Error("Invalid ID!");

    return await context.prisma.clients.update({
        where: {
            id: args.id
        },
        data: {
            name: args ? args.name : name,
            displayName: args ? args.displayName: displayName,
            updated_at: currentTime,

        }
    });
}