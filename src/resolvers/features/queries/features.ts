import { Feature } from "../types"; 

export default async function features (parent: any, args: Feature, context: any): Promise<Feature>  {
    return context.prisma.features.findMany();
}