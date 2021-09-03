import { Manufacturer } from '../../types';
import ManufacturerModel from '../../ManufacturerModel';

export default async function updateManufacturer (parent: any, args: Manufacturer): Promise<Manufacturer>{

    let existingManufacturer!: Manufacturer;
    const manufacturerId: string = args.id;
    

    try {
        existingManufacturer = await ManufacturerModel.findOne(manufacturerId);
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching Manufacturer with ID ${manufacturerId}`);
    }

    if(!existingManufacturer) {
        throw new Error(`There is no Manufacturer with ID ${manufacturerId}`);
    }
    
    return await ManufacturerModel.updateOne(manufacturerId, args)
}