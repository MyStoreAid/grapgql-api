import { Brand } from "../types";

export default async function brands (parent: any, args: any, context: any): Promise<Brand[]> {
    return await context.prisma.brands.findMany();
}