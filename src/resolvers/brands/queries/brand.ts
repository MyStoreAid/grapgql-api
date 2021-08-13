import { Brand, BrandIdArgs } from "../types";

export default async function brand (parent:any, args: BrandIdArgs, context:any, info:any ): Promise<Brand> | never {
    let result!: Brand;
    const brandId: String =  args.id;
    
    try {
        result = await context.prisma.brands.findUnique({
            where: {
                id: brandId
            }
        });
    } catch (error: unknown) {
        new Error(`There was an error getting brand with ID ${brandId}.`);
    }

    if (!result) {
        new Error(`There is no brand with ID ${brandId}.`);
    }

    return result;
}