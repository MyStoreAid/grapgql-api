import { Manufacturer } from "../../types";
import ManufacturerModel from "../../ManufacturerModel";

export default async function manufacturers (parent: any, args: any): Promise<Manufacturer[]> {
    return ManufacturerModel.findMany();
}