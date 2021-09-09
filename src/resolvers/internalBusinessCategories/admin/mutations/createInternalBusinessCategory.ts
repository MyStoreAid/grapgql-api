import { InternalBusinessCategory } from "../../types";
import { InternalBusinessCategory as InternalBusinessCategoryModel } from "@mystoreaid/prisma-models";

export default async function createInternalBusinessCategory (parent: any, args: InternalBusinessCategory): Promise<InternalBusinessCategory> {
    return await InternalBusinessCategoryModel.createOne(args)   
}