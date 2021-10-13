import { Manufacturer } from "../../types";
import { Manufacturer as ManufacturerModel } from "@mystoreaid/prisma-models";

export default async function manufacturers (parent: any, args: any): Promise<Manufacturer[]> {
    return ManufacturerModel.findMany();
}