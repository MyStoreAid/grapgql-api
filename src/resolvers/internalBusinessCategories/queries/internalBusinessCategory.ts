
export default function internalBusinessCategory (parent:any, args:any, context:any, info:any ) {
    return context.prisma.internal_business_categories.findUnique({
        where: {
            id: args.id
        }
    });

}