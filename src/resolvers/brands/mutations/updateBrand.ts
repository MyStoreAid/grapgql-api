import moment from 'moment';

export default function updateBrand(parent:any, args:any, context:any, info:any){
    return context.prisma.brand.update({
        where: {
            id: args.id
        },
        data: {
            name: args.name,
            last_modified: moment().toDate().getTime(),

        }
    });
}