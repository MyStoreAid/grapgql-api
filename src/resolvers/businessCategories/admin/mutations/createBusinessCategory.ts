import { BusinessCategory as BusinessCategoryModel } from "@mystoreaid/prisma-models";
import { BusinessCategory } from '../../types';

export default async function createBusinessCategory (parent: any, args: BusinessCategory, context: any): Promise<BusinessCategory> {
   return await BusinessCategoryModel.createOne(args)
}