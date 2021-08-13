import TimeHelper from '../../../helpers/TimeHelper';
import UuidHelper from '../../../helpers/UuidHelper';
import {Brand} from '../types';

export default async function createBrand (parent: any, args: Brand, context: any): Promise<Brand> {
    const currentTime: number = TimeHelper.currentTime;
    return context.prisma.brands.create({
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