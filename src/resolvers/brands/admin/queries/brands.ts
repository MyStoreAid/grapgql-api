
import BrandModel from "../../BrandModel";
import { Brand } from "../../types";

export default async function brands (parent: any, args: any): Promise<Brand[]> {
    return BrandModel.findMany();
}