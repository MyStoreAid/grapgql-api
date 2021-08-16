import BrandModel from '../BrandModel';
import { Brand } from "../types";

export default async function updateBrand(parent: any, args: Brand, context:any): Promise<Brand> | never {
    let existingBrand!: Brand;
    const brandId: string = args.id;
    
    try {
        existingBrand = await BrandModel.findOne(context.prisma.brands, brandId);
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching brands with ID ${args.id}`);
    }

    if(!existingBrand) {
        throw new Error(`There is no brand with ID ${args.id}`);
    }

    return BrandModel.updateOne(context.prisma.brands, brandId, args);
}