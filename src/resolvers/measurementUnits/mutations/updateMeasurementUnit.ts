import moment from 'moment';

export default async function updateMeasurementUnit (parent:any, args:any, context:any, info:any){
    const { id } = await context.prisma.measurement_units.findUnique({ where: {id: args.id} });
    const currentTime = moment().toDate().getTime();

    if(!id) throw new Error("Invalid ID");

    return await context.prisma.measurement_units.update({
        where: {
            id: args.id
        },
        data: {
            name: args.name,
            symbol: args.symbol,
            updated_at: currentTime,
            last_modified: currentTime,
            server_created_at: currentTime
        }
    });
}