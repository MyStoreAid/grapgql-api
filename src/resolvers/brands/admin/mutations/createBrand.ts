import BrandModel from '../../BrandModel';
import {Brand} from '../../types';

export default async function createBrand (parent: any, args: Brand): Promise<Brand> {
    return BrandModel.createOne(args);
}