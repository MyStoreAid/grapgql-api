import { Feature } from "../../types"; 
import FeatureModel from "../../FeatureModel";

export default async function features (parent: any, args: Feature, context: any): Promise<Feature[]>  {
    return FeatureModel.findMany(context.prisma.features);
}