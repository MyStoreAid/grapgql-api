import TimeHelper from '../../../../helpers/TimeHelper';
import BrandModel from '../../BrandModel';
import {Brand, BrandIdArgs} from '../../types';

export default async function deleteBrand (parent:any, args: BrandIdArgs, context:any): Promise<Brand> | never {
    let existingBrand!: Brand;
    const brandId: string = args.id;

    try {
        existingBrand = await BrandModel.findOne(context.prisma.brands, brandId);
    } catch (error: unknown) {
        console.error(error);
        throw new Error(`There is an error fetching a brand with ID ${brandId}`);
    }

    if(!existingBrand) {
        throw new Error(`There is no brand with ID ${brandId}`);
    }

    return BrandModel.deleteOne(context.prisma.brands, brandId);
}