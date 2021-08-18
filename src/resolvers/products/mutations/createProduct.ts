import { Product } from '../types';
import ProductModel from '../ProductModel';


export default async function createProduct (parent: any, args: Product, context: any): Promise<Product> {
    let data = {
      name: args.name,
      summary: args.summary,
      barCode: args.barCode,
      manufacturer: args.manufacturerId ? {connect: { id: args.manufacturerId}} : undefined, 
      brand: args.brandId ? { connect: { id: args.brandId}} : undefined,
      productCategory: args.productCategoryId ? { connect: { id: args.productCategoryId}} : undefined,
      productSegment: args.productSegmentId ? { connect: { id: args.productSegmentId}} : undefined,
      measuerementUnit: args.measuerementUnitId ? { connect: { id: args.measuerementUnitId}}: undefined,
      weight: args.weight,
      image: args.image,
      adminLastModifiedBy: args.adminLastModifiedBy,
      lastModifiedBy: args.lastModifiedBy ? { connect: { id: args.lastModifiedBy }}: undefined,
    };

    
    return ProductModel.createOne(context.prisma.products, data);
}