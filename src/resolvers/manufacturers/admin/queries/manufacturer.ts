import { ManufacturerIdArgs, Manufacturer } from "../../types";
import ManufacturerModel from "../../ManufacturerModel";

export default async function manufacturer (parent: any, args: ManufacturerIdArgs, context: any): Promise<Manufacturer> | never {
    let result!: Manufacturer;
    const manufacturerId: string = args.id;

    try {
        result = await ManufacturerModel.findOne(context.prisma.manufacturers, manufacturerId);
    } catch (error: unknown) {
        new Error(`There was an error getting Manufacturer with ID ${manufacturerId}.`);
    }

    if (!result) {
        new Error(`There is no Manufacturer with ID ${manufacturerId}.`);
    }

    return result;

}