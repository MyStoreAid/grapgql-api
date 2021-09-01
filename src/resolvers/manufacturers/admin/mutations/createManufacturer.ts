import { Manufacturer } from '../../types';
import ManufacturerModel from '../../ManufacturerModel';

export default async function createManufacturer (parent: any, args: Manufacturer, context: any): Promise<Manufacturer> {

    return await ManufacturerModel.createOne(context.prisma.manufacturers, args)
}