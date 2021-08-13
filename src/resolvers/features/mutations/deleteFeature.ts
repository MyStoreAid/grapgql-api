import { Feature, FeatureIdArgs } from "../types";
import TimeHelper from '../../../helpers/TimeHelper';

export default async function deleteFeature (parent: any, args: FeatureIdArgs, context: any): Promise<Feature> | never {
    let existingFeature!: Feature;
    const FeatureId: String = args.id;

    try {
        existingFeature = await context.prisma.features.findUnique({ where: {id: FeatureId}});
    } catch (error: unknown) {
        console.error(error);
        throw new Error(`There is an error fetching a Feature with ID ${FeatureId}`);
    }

    if(!existingFeature) {
        throw new Error(`There is no Feature with ID ${FeatureId}`);
    }


    return await context.prisma.features.update({
        where: {
            id: args.id
        },
        data: {
            deleted : true,
            updated_at: TimeHelper.currentTime,

        }
    })
}