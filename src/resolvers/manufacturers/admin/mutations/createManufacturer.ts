import { Manufacturer } from '../../types';
import { Manufacturer as ManufacturerModel } from "@mystoreaid/prisma-models";

export default async function createManufacturer (parent: any, args: Manufacturer): Promise<Manufacturer> {

    return await ManufacturerModel.createOne(args)
}