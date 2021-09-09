import { Feature, FeatureIdArgs } from "../../types";
import { Feature as FeatureModel } from "@mystoreaid/prisma-models";

export default async function feature (parent: any, args: FeatureIdArgs): Promise<Feature> | never  {
    let result!: Feature;
    const featureId: string = args.id;

    try {
        result = await FeatureModel.findOne(featureId);
    } catch (error: unknown) {
        new Error(`There was an error getting Feature with ID ${featureId}.`);
    }

    if (!result) {
        new Error(`There is no Feature with ID ${featureId}.`);
    }

    return result;

}