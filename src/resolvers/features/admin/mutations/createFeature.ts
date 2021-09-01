import { Feature} from "../../types";
import FeatureModel from "../../FeatureModel";


export default async function createFeature (parent: any, args: Feature, context: any): Promise<Feature> {
    return await FeatureModel.createOne(context.prisma.features, args);
}