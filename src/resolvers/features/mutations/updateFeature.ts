import { Feature } from "../types";
import TimeHelper from '../../../helpers/TimeHelper';


export default async function updateFeature (parent: any, args: Feature, context: any): Promise<Feature> | never {
    let existingFeature!: Feature;
    const FeatureId: String = args.id;
    const currentTime: number = TimeHelper.currentTime;

    try {
        existingFeature = await context.prisma.features.findUnique({ where: {id: FeatureId } });
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching Feature with ID ${FeatureId}`);
    }

    if(!existingFeature) {
        throw new Error(`There is no Feature with ID ${FeatureId}`);
    }

    return await context.prisma.features.update({
        where: {
            id: FeatureId
        },
        data: {
            name: args.name,
            description: args.description,
            updated_at: currentTime,

        }
    });
}