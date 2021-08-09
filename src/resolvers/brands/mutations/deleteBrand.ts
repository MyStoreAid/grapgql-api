import moment from 'moment';

export default function deleteBrand (parent:any, args:any, context:any, info:any) {
    return context.prisma.brand.update({
        where: {
            id: args.id
        },
        data: {
            deleted : true,
            last_modified: moment().toDate().getTime(),

        }
    })
}