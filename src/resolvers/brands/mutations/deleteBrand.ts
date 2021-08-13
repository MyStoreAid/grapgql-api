import TimeHelper from '../../../helpers/TimeHelper';
import {Brand, BrandIdArgs} from '../types';

export default async function deleteBrand (parent:any, args: BrandIdArgs, context:any): Promise<Brand> | never {
    let existingBrand!: Brand;
    const brandId: String = args.id;

    try {
        existingBrand = await context.prisma.brands.findUnique({ where: {id: brandId}});
    } catch (error: unknown) {
        console.error(error);
        throw new Error(`There is an error fetching a brand with ID ${brandId}`);
    }

    if(!existingBrand) {
        throw new Error(`There is no brand with ID ${brandId}`);
    }

    return context.prisma.brands.update({
        where: {
            id: brandId
        },
        data: {
            deleted : true,
            last_modified: TimeHelper.currentTime,
        }
    })
}