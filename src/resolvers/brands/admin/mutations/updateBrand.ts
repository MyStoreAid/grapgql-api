import { Brand as BrandModel } from "@mystoreaid/prisma-models";
import { Brand } from "../../types";

export default async function updateBrand(parent: any, args: Brand): Promise<Brand> | never {
    let existingBrand!: Brand;
    const brandId: string = args.id;
    
    try {
        existingBrand = await BrandModel.findOne(brandId);
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching brands with ID ${args.id}`);
    }

    if(!existingBrand) {
        throw new Error(`There is no brand with ID ${args.id}`);
    }

   

    return BrandModel.updateOne(brandId, args);
}