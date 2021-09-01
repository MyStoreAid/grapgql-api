import { Feature, FeatureIdArgs } from "../../types";
import FeatureModel from "../../FeatureModel";

export default async function deleteFeature (parent: any, args: FeatureIdArgs, context: any): Promise<Feature> | never {
    let existingFeature!: Feature;
    const featureId: string = args.id;

    try {
        existingFeature = await FeatureModel.findOne(context.prisma.features, featureId)
    } catch (error: unknown) {
        console.error(error);
        throw new Error(`There is an error fetching a Feature with ID ${featureId}`);
    }

    if(!existingFeature) {
        throw new Error(`There is no Feature with ID ${featureId}`);
    }


    return await FeatureModel.deleteOne(context.prisma.features, featureId)
}