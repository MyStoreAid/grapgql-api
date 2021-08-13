import { Manufacturer } from '../types';
import TimeHelper from '../../../helpers/TimeHelper';

export default async function updateManufacturer (parent: any, args: Manufacturer, context: any,): Promise<Manufacturer>{

    let existingManufacturer!: Manufacturer;
    const manufacturerId: String = args.id;
    const currentTime: number = TimeHelper.currentTime;

    try {
        existingManufacturer = await context.prisma.manufacturers.findUnique({ where: {id: manufacturerId } });
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching Manufacturer with ID ${manufacturerId}`);
    }

    if(!existingManufacturer) {
        throw new Error(`There is no Manufacturer with ID ${manufacturerId}`);
    }
    
    return await context.prisma.manufacturers.update({
        where: {
            id: manufacturerId
        },
        data: {
            name: args.name,
            updated_at: currentTime,
            last_modified: currentTime,

        }
    });
}