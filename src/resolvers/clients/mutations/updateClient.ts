
import moment from 'moment';

export default async function updateClient (parent:any, args:any, context:any, info:any){

    const { name, displayName } = await context.prisma.clients.findUnique({ where: { name: args.name }});
    const currentTime = moment().toDate().getTime();

    if(!name) throw new Error("Invalid ID!");

    return await context.prisma.clients.update({
        where: {
            name: args.name
        },
        data: {
            name: args ? args.name : name,
            displayName: args ? args.displayName: displayName,
            updated_at: currentTime,

        }
    });
}