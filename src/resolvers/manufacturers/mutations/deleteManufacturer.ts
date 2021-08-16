import { ManufacturerIdArgs, Manufacturer } from '../types';
import TimeHelper from '../../../helpers/TimeHelper';

export default async function deleteManufacturer (parent:any, args:ManufacturerIdArgs, context:any, info:any): Promise<Manufacturer> | never {
    let existingManufacturer!: Manufacturer;
    const manufacturerId: String = args.id;
    const currentTime: number = TimeHelper.currentTime;

    try {
        existingManufacturer = await context.prisma.manufacturers.findUnique({ where: {id: manufacturerId}});
    } catch (error: unknown) {
        console.error(error);
        throw new Error(`There is an error fetching a Manufacturer with ID ${manufacturerId}`);
    }

    if(!existingManufacturer) {
        throw new Error(`There is no Manufacturer with ID ${manufacturerId}`);
    }

    return await context.prisma.manufacturers.update({
        where: {
            id: args.id
        },
        data: {
            deleted : true,
            updated_at: currentTime,
            last_modified: currentTime, 

        }
    })
}