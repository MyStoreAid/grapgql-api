export default async function branchGoals (parent: any, args: any, context: any) {
    return context.prisma.branch_goals.findMany();
}