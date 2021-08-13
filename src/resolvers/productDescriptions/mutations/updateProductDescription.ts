import { ProductDescription } from '../types';
import TimeHelper from '../../../helpers/TimeHelper';

export default async function updateProductDescription (parent: any, args: ProductDescription, context: any): Promise<ProductDescription> | never{
    
    let existingProductDescription!: ProductDescription;
    const currentTime: number = TimeHelper.currentTime
    const productDescriptionId: String = args.id;

    try {
        existingProductDescription = await context.prisma.product_descriptions.findUnique({ where: {id: productDescriptionId } });
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching ProductDescription with ID ${productDescriptionId}`);
    }

    if(!existingProductDescription) {
        throw new Error(`There is no ProductDescription with ID ${productDescriptionId}`);
    }
    
    return await context.prisma.product_descriptions.update({
        where: {
            id: productDescriptionId
        },
        data: {
            name: args.name,
            summary: args.summary,
            updated_at: currentTime,
            last_modified: currentTime,

        }
    });
}