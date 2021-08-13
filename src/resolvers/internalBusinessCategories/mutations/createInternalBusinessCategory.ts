import { InternalBusinessCategory } from "../types";
import TimeHelper from '../../../helpers/TimeHelper';
import UuidHelper from "../../../helpers/UuidHelper";

export default async function createInternalBusinessCategory (parent: any, args: InternalBusinessCategory, context: any): Promise<InternalBusinessCategory> {
    const currentTime = TimeHelper.currentTime;
    
    return await context.prisma.internal_business_categories.create({
        data: {
            id: UuidHelper.newUuid,
            name: args.name,
            description: args ? args.description : "",
            created_at: currentTime,
            updated_at: currentTime,
            
        }
    });
}