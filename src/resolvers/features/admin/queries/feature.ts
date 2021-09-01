import { Feature, FeatureIdArgs } from "../../types";
import FeatureModel from "../../FeatureModel";

export default async function feature (parent: any, args: FeatureIdArgs, context: any): Promise<Feature> | never  {
    let result!: Feature;
    const featureId: string = args.id;

    try {
        result = await FeatureModel.findOne(context.prisma.features, featureId);
    } catch (error: unknown) {
        new Error(`There was an error getting Feature with ID ${featureId}.`);
    }

    if (!result) {
        new Error(`There is no Feature with ID ${featureId}.`);
    }

    return result;

}