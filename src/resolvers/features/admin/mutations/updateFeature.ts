import { Feature } from "../../types";
import { Feature as FeatureModel } from "@mystoreaid/prisma-models";

export default async function updateFeature (parent: any, args: Feature): Promise<Feature> | never {
    let existingFeature!: Feature;
    const featureId: string = args.id;
    

    try {
        existingFeature = await FeatureModel.findOne(featureId)
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching Feature with ID ${featureId}`);
    }

    if(!existingFeature) {
        throw new Error(`There is no Feature with ID ${featureId}`);
    }

    return await FeatureModel.updateOne(featureId, args)
}