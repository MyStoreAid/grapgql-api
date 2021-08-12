import moment from 'moment';

export default async function updateProductDescription (parent:any, args:any, context:any, info:any){
    const { id } = await context.prisma.product_descriptions.findUnique({ where: { id: args.id} });
    const currentTime = moment().toDate().getTime();

    if(!id) throw new Error("Invalid ID");
    
    return await context.prisma.product_descriptions.update({
        where: {
            id: args.id
        },
        data: {
            name: args.name,
            summary: args.summary,
            updated_at: currentTime,
            last_modified: currentTime,

        }
    });
}