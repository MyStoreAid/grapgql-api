import moment from 'moment';

export default function updateManufacturer (parent:any, args:any, context:any, info:any){
    return context.prisma.manufacturers.update({
        where: {
            id: args.id
        },
        data: {
            name: args.name,
            last_modified: moment().toDate().getTime(),

        }
    });
}