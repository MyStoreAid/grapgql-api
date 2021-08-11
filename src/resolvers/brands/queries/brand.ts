
export default function brand (parent:any, args:any, context:any, info:any ) {
    return context.prisma.brands.findUnique({
        where: {
            id: args.id
        }
    });

}