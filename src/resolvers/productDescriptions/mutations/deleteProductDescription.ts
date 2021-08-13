import { ProductDescriptionIdArgs, ProductDescription } from '../types';
import TimeHelper from '../../../helpers/TimeHelper';

export default async function deleteProductDescription (parent: any, args: ProductDescriptionIdArgs, context: any): Promise<ProductDescription> | never {
   
    let existingProductDescription!: ProductDescription;
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
            id: args.id
        },
        data: {
            deleted : true,
            last_modified: TimeHelper.currentTime,

        }
    })
}