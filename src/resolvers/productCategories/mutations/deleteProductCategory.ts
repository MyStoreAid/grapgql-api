import { ProductCategoryIdArgs, ProductCategory } from '../types';
import TimeHelper from '../../../helpers/TimeHelper';

export default async function deleteProductCategory (parent: any, args: ProductCategoryIdArgs, context: any): Promise<ProductCategory> | never {

    let existingProductCategory!: ProductCategory;
    const productCategoryId: String = args.id;
    const currentTime: number = TimeHelper.currentTime;

    try {
        existingProductCategory = await context.prisma.product_categories.findUnique({ where: {id: productCategoryId}});
    } catch (error: unknown) {
        console.error(error);
        throw new Error(`There is an error fetching a ProductCategory with ID ${productCategoryId}`);
    }

    if(!existingProductCategory) {
        throw new Error(`There is no ProductCategory with ID ${productCategoryId}`);
    }

    return await context.prisma.product_categories.update({
        where: {
            id: productCategoryId
        },
        data: {
            deleted : true,
            updated_at: currentTime,
            last_modified: currentTime,

        }
    })
}