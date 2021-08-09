
export default function brand (parent:any, args:any, context:any, info:any ) {
    return context.prisma.brand.findUnique({
        where: {
            id: args.id
        }
    });

}