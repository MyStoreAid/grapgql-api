import TimeHelper from '../../../helpers/TimeHelper';
import { Brand } from "../types";

export default async function updateBrand(parent: any, args: Brand, context:any): Promise<Brand> | never {
    let existingBrand!: Brand;
    const brandId: String = args.id;
    
    try {
        existingBrand = await context.prisma.brands.findUnique({ where: {id: brandId } });
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching brands with ID ${args.id}`);
    }

    if(!existingBrand) {
        throw new Error(`There is no brand with ID ${args.id}`);
    }

    return context.prisma.brands.update({
        where: {
            id: brandId
        },
        data: {
            name: args.name,
            last_modified: TimeHelper.currentTime,
        }
    });
}