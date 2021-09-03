import { Manufacturer } from '../../types';
import ManufacturerModel from '../../ManufacturerModel';

export default async function createManufacturer (parent: any, args: Manufacturer): Promise<Manufacturer> {

    return await ManufacturerModel.createOne(args)
}