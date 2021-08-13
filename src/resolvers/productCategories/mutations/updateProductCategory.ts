import { ProductCategory } from '../types';
import TimeHelper from '../../../helpers/TimeHelper';

export default async function updateProductCategory (parent: any, args: ProductCategory, context:any, info:any): Promise<ProductCategory> | never {
    
    let existingProductCategory!: ProductCategory;
    const productCategoryId: String = args.id;
    const currentTime: number = TimeHelper.currentTime;

    try {
        existingProductCategory = await context.prisma.product_categories.findUnique({ where: {id: productCategoryId } });
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching ProductCategory with ID ${productCategoryId}`);
    }

    if(!existingProductCategory) {
        throw new Error(`There is no ProductCategory with ID ${productCategoryId}`);
    }

    return await context.prisma.product_categories.update({
        where: {
            id: productCategoryId
        },
        data: {
            name: args.name,
            summary: args.summary,
            updated_at: currentTime,
            server_created_at: currentTime,
            last_modified: currentTime,
        }
    });
}