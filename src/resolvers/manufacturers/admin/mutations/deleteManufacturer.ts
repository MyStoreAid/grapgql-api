import { ManufacturerIdArgs, Manufacturer } from '../../types';
import ManufacturerModel from '../../ManufacturerModel';

export default async function deleteManufacturer (parent:any, args:ManufacturerIdArgs, context:any, info:any): Promise<Manufacturer> | never {
    let existingManufacturer!: Manufacturer;
    const manufacturerId: string = args.id;
   

    try {
        existingManufacturer = await ManufacturerModel.findOne(context.prisma.manufacturers, manufacturerId);
    } catch (error: unknown) {
        console.error(error);
        throw new Error(`There is an error fetching a Manufacturer with ID ${manufacturerId}`);
    }

    if(!existingManufacturer) {
        throw new Error(`There is no Manufacturer with ID ${manufacturerId}`);
    }

    return await ManufacturerModel.deleteOne(context.prisma.manufacturers, manufacturerId);
}