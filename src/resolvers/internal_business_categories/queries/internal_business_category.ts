
export default function internal_business_category (parent:any, args:any, context:any, info:any ) {
    return context.prisma.internal_Business_Categories.findUnique({
        where: {
            id: args.id
        }
    });

}