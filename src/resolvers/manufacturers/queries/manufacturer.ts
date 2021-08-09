
export default function manufacturer (parent:any, args:any, context:any, info:any ) {
    return context.prisma.manufacturers.findUnique({
        where: {
            id: args.id
        }
    });

}