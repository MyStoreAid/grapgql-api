import moment from 'moment';

export default function deleteManufacturer (parent:any, args:any, context:any, info:any) {
    return context.prisma.manufacturers.update({
        where: {
            id: args.id
        },
        data: {
            deleted : true,
            last_modified: moment().toDate().getTime(),

        }
    })
}