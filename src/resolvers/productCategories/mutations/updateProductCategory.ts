import moment from 'moment';

export default async function updateProductCategory (parent:any, args:any, context:any, info:any){
    
    const { id } = await context.prisma.product_categories.findUnique({ where: {id: args.id} });
    const currentTime = moment().toDate().getTime();

    if(!id) throw new Error("Invalid ID");

    return await context.prisma.product_categories.update({
        where: {
            id: args.id
        },
        data: {
            name: args.name,
            summary: args.summary,
            updated_at: currentTime,
            server_created_at: currentTime,
            last_modified: currentTime,
        }
    });
}