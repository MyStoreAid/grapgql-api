import { Feature} from "../types";
import TimeHelper from '../../../helpers/TimeHelper';
import UuidHelper from "../../../helpers/UuidHelper";


export default async function createFeature (parent: any, args: Feature, context: any): Promise<Feature> {
    const currentTime = TimeHelper.currentTime;
    
    return await context.prisma.features.create({
        data: {
            id: UuidHelper.newUuid,
            name: args.name,
            description: args ? args.description : "",
            created_at: currentTime,
            updated_at: currentTime,
            
        }
    });
}