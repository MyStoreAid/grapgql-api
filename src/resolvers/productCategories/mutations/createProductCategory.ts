import { ProductCategory } from '../types';
import TimeHelper from '../../../helpers/TimeHelper';
import UuidHelper from "../../../helpers/UuidHelper";


export default async function createProductCategory (parent: any, args: ProductCategory, context: any): Promise<ProductCategory> {
    const currentTime = TimeHelper.currentTime;

    return await context.prisma.product_categories.create({
        data: {
            id: UuidHelper.newUuid,
            name: args.name,
            summary: args.summary,
            created_at: currentTime,
            updated_at: currentTime,
            server_created_at: currentTime,
            last_modified: currentTime,
        }
    });
}