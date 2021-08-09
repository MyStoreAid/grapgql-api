import moment from 'moment';

export default function updateInternalBusinessCategory (parent:any, args:any, context:any, info:any){
    const {name, description} = context.prisma.internal_business_categories.findUnique({
        where: {
            id: args.id
        }
    })

    return context.prisma.internal_Business_Categories.update({
        where: {
            id: args.id
        },
        data: {
            name: args ? args.name : name,
            description: args ? args.description: description,
            last_modified: moment().toDate().getTime(),

        }
    });
}