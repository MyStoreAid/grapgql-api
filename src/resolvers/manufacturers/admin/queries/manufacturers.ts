import { Manufacturer } from "../../types";
import ManufacturerModel from "../../ManufacturerModel";

export default async function manufacturers (parent: any, args: any, context: any): Promise<Manufacturer[]> {
    return ManufacturerModel.findMany(context.prisma.manufacturers);
}