import BusinessCategoryModel from '../../BusinessCategoryModel';
import { BusinessCategory } from '../../types';

export default async function createBusinessCategory (parent: any, args: BusinessCategory, context: any): Promise<BusinessCategory> {
   return await BusinessCategoryModel.createOne(args)
}