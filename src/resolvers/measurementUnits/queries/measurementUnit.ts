export default async function measurementUnit (parent:any, args:any, context:any, info:any ) {

    const res = await context.prisma.measurement_units.findUnique({
        where: {
            id: args.id
        }
    });

    if(!res.id) throw new Error("Invalid ID");

    return res;

}