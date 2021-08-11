export default async function branchGoal (parent:any, args:any, context:any, info:any ) {

    const res = await context.prisma.branch_goals.findUnique({
        where: {
            id: args.id
        }
    });

    if(!res.id) throw new Error("Invalid ID");

    return res;

}