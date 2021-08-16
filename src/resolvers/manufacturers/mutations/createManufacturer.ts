import { Manufacturer } from '../types';
import TimeHelper from '../../../helpers/TimeHelper';
import UuidHelper from "../../../helpers/UuidHelper";

export default async function createManufacturer (parent: any, args: Manufacturer, context: any): Promise<Manufacturer> {

    const currentTime = TimeHelper.currentTime
    return await context.prisma.manufacturers.create({
        data: {
            id: UuidHelper.newUuid,
            name: args.name,
            created_at: currentTime,
            updated_at: currentTime,
            server_created_at: currentTime,
            last_modified: currentTime,
        }
    });
}