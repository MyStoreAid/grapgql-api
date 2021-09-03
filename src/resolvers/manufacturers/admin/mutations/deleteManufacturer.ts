import { ManufacturerIdArgs, Manufacturer } from '../../types';
import ManufacturerModel from '../../ManufacturerModel';

export default async function deleteManufacturer (parent:any, args:ManufacturerIdArgs): Promise<Manufacturer> | never {
    let existingManufacturer!: Manufacturer;
    const manufacturerId: string = args.id;
   

    try {
        existingManufacturer = await ManufacturerModel.findOne(manufacturerId);
    } catch (error: unknown) {
        console.error(error);
        throw new Error(`There is an error fetching a Manufacturer with ID ${manufacturerId}`);
    }

    if(!existingManufacturer) {
        throw new Error(`There is no Manufacturer with ID ${manufacturerId}`);
    }

    return await ManufacturerModel.deleteOne(manufacturerId);
}