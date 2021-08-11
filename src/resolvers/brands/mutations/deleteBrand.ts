import moment from 'moment';

export default async function deleteBrand (parent: any, args: any, context: any) {
    const { id } = await context.prisma.brand.findUnique({ where: { id: args.id } });

    if (!id) throw new Error("Invalid ID");

    return await context.prisma.brand.update({
        where: {
            id: args.id

        },
        data: {
            deleted: true,
            updated_at: moment().toDate().getTime(),
            last_modified: moment().toDate().getTime(),
        }
    });
}