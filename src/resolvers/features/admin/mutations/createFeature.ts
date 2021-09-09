import { Feature} from "../../types";
import { Feature as FeatureModel } from "@mystoreaid/prisma-models";


export default async function createFeature (parent: any, args: Feature, context: any): Promise<Feature> {
    return await FeatureModel.createOne(args);
}