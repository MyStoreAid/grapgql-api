import { Manufacturer } from "../types";

export default async function manufacturers (parent: any, args: any, context: any): Promise<Manufacturer[]> {
    return context.prisma.manufacturers.findMany();
}