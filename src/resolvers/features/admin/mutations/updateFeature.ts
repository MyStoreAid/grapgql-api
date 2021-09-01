import { Feature } from "../../types";
import FeatureModel from "../../FeatureModel";


export default async function updateFeature (parent: any, args: Feature, context: any): Promise<Feature> | never {
    let existingFeature!: Feature;
    const featureId: string = args.id;
    

    try {
        existingFeature = await FeatureModel.findOne(context.prisma.features, featureId)
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching Feature with ID ${featureId}`);
    }

    if(!existingFeature) {
        throw new Error(`There is no Feature with ID ${featureId}`);
    }

    return await FeatureModel.updateOne(context.prisma.features, featureId, args)
}