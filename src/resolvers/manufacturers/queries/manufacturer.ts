import { ManufacturerIdArgs, Manufacturer } from "../types";

export default async function manufacturer (parent: any, args: ManufacturerIdArgs, context: any): Promise<Manufacturer> | never {
    let result!: Manufacturer;
    const manufacturerId: String = args.id;

    try {
        result = await context.prisma.manufacturers.findUnique({
            where: {
                id: manufacturerId
            }
        });
    } catch (error: unknown) {
        new Error(`There was an error getting Manufacturer with ID ${manufacturerId}.`);
    }

    if (!result) {
        new Error(`There is no Manufacturer with ID ${manufacturerId}.`);
    }

    return result;

}