
import { Brand } from "../../types";
import {Brand as BrandModel} from '@mystoreaid/prisma-models'

export default async function brands (parent: any, args: any): Promise<Brand[]> {
    return BrandModel.findMany();
}