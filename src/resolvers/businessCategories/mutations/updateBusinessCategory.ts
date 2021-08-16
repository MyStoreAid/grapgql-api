import TimeHelper from '../../../helpers/TimeHelper';
import { BusinessCategory} from '../types';

export default async function updateBusinessCategory (parent: any, args: BusinessCategory, context: any, info: any): Promise<BusinessCategory> | never {
    let existingBusinessCategory!: BusinessCategory;
    const businessCategoryId: String = args.id;
    const currentTime: number = TimeHelper.currentTime;

    try {
        existingBusinessCategory = await context.prisma.business_categories.findUnique({ where: {id: businessCategoryId } });
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching business category with ID ${args.id}`);
    }

    if(!existingBusinessCategory) {
        throw new Error(`There is no business category with ID ${args.id}`);
    }

    return await context.prisma.business_categories.update({
        where: {
            id: args.id
        },
        data: {
            name: args.name,
            description: args.description,
            updated_at: currentTime,

        }
    });
}