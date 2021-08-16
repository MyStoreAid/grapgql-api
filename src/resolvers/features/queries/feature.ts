import { Feature, FeatureIdArgs } from "../types";

export default async function feature (parent: any, args: FeatureIdArgs, context: any): Promise<Feature> | never  {
    let result!: Feature;
    const featureId: String = args.id;

    try {
        result = await context.prisma.features.findUnique({
            where: {
                id: featureId
            }
        });
    } catch (error: unknown) {
        new Error(`There was an error getting Feature with ID ${featureId}.`);
    }

    if (!result) {
        new Error(`There is no Feature with ID ${featureId}.`);
    }

    return result;

}