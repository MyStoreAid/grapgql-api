export default async function measurementUnits (parent: any, args: any, context: any) {
    return context.prisma.measurement_units.findMany();
}