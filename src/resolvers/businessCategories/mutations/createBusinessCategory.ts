import TimeHelper from '../../../helpers/TimeHelper';
import UuidHelper from '../../../helpers/UuidHelper';
import { BusinessCategory } from '../types';

export default async function createBusinessCategory (parent: any, args: BusinessCategory, context: any): Promise<BusinessCategory> {
    const currentTime: number = TimeHelper.currentTime;

    return await context.prisma.business_categories.create({
        data: {
            id: UuidHelper.newUuid,
            name: args.name,
            description: args ? args.description : "",
            created_at: currentTime,
            updated_at: currentTime,
            
        }
    });
}