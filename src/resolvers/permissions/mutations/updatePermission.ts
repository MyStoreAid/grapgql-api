import moment from 'moment';

export default async function updatePermission (parent:any, args:any, context:any, info:any){

    const { id, name, description } = await context.prisma.permissions.findUnique({ where: { id: args.id }});
    const currentTime = moment().toDate().getTime();

    if(!id) throw new Error("Invalid ID!");

    return await context.prisma.permissions.update({
        where: {
            id: args.id
        },
        data: {
            name: args ? args.name : name,
            description: args ? args.description: description,
            updated_at: currentTime,

        }
    });
}