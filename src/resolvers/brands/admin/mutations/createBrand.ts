import BrandModel from '../../BrandModel';
import {Brand} from '../../types';

export default async function createBrand (parent: any, args: Brand, context: any): Promise<Brand> {
    return BrandModel.createOne(context.prisma.brands, args);
}