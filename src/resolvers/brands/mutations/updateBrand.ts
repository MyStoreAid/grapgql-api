import moment from 'moment';

export default async function updateBrand(parent:any, args:any, context:any, info:any){
    const { id } = context.prisma.brands.findUnique({ where: {id: args.id} });

    if(!id) throw new Error("Invalid ID");

    return await context.prisma.brands.update({
        where: {
            id: args.id
        },
        data: {
            name: args.name,
            last_modified: moment().toDate().getTime(),
        }
    });
}