import moment from 'moment';

export default async function deleteBranchGoal (parent:any, args:any, context:any, info:any) {

    const { id } = await context.prisma.branch_goals.findUnique({ where: {id: args.id} });
    const currentTime = moment().toDate().getTime();

    if(!id) throw new Error("Invalid ID");

    return await context.prisma.branch_goals.update({
        where: {
            id: args.id
        },
        data: {
            deleted : true,
            active: false,
            updated_at: currentTime,
            last_modified: currentTime,

        }
    })
}