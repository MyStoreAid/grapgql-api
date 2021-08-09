import moment from 'moment';

export default function deleteInternalBusinessCategory (parent:any, args:any, context:any, info:any) {
    return context.prisma.internal_Business_Categories.update({
        where: {
            id: args.id
        },
        data: {
            deleted : true,
            last_modified: moment().toDate().getTime(),

        }
    })
}