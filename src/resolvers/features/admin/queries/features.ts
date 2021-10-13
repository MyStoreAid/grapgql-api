import { Feature } from "../../types"; 
import { Feature as FeatureModel } from "@mystoreaid/prisma-models";

export default async function features (parent: any, args: Feature): Promise<Feature[]>  {
    return FeatureModel.findMany();
}