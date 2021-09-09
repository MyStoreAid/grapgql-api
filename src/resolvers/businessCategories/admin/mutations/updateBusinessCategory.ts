import { BusinessCategory as BusinessCategoryModel } from "@mystoreaid/prisma-models";
import { BusinessCategory} from '../../types';

export default async function updateBusinessCategory (parent: any, args: BusinessCategory, context: any, info: any): Promise<BusinessCategory> | never {
    let existingBusinessCategory!: BusinessCategory;
    const businessCategoryId: string = args.id;


    try {
        existingBusinessCategory = await BusinessCategoryModel.findOne(businessCategoryId)
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching business category with ID ${businessCategoryId}`);
    }

    if(!existingBusinessCategory) {
        throw new Error(`There is no business category with ID ${businessCategoryId}`);
    }

    return await BusinessCategoryModel.updateOne(businessCategoryId, args)
}