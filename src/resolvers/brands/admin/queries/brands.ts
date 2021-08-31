
import BrandModel from "../../BrandModel";
import { Brand } from "../../types";

export default async function brands (parent: any, args: any, context: any): Promise<Brand[]> {
    return BrandModel.findMany(context.prisma.brands);
}