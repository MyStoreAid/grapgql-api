import { Feature, FeatureIdArgs } from "../../types";
import { Feature as FeatureModel } from "@mystoreaid/prisma-models";

export default async function deleteFeature (parent: any, args: FeatureIdArgs): Promise<Feature> | never {
    let existingFeature!: Feature;
    const featureId: string = args.id;

    try {
        existingFeature = await FeatureModel.findOne(featureId)
    } catch (error: unknown) {
        console.error(error);
        throw new Error(`There is an error fetching a Feature with ID ${featureId}`);
    }

    if(!existingFeature) {
        throw new Error(`There is no Feature with ID ${featureId}`);
    }


    return await FeatureModel.deleteOne(featureId)
}