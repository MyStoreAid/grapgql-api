import { Product } from '../../types';
import ProductModel from '../../ProductModel';


export default async function createProduct (parent: any, args: Product, context: any): Promise<Product> {
    let data = {
        data: {
        name: args.name,
        summary: args.summary,
        barCode: args.barCode,
        manufacturer: args.manufacturerId ? {connect: { id: args.manufacturerId}} : undefined, 
        brands: args.brandId ? { connect: { id: args.brandId}} : undefined,
        product_categories: args.productCategoryId ? { connect: { id: args.productCategoryId}} : undefined,
        product_segments: args.productSegmentId ? { connect: { id: args.productSegmentId}} : undefined,
        measuerementUnit: args.measuerementUnitId ? { connect: { id: args.measuerementUnitId}}: undefined,
        weight: args.weight,
        image: args.image,
        adminLastModifiedBy: args.adminLastModifiedBy,
        users: args.lastModifiedBy ? { connect: { id: args.lastModifiedBy }}: undefined,
      },
      include: {
        brands: true,
        product_categories: true,
        users: true,
        product_segments: true,
      }
    };

    
    return ProductModel.createOneForeignKey( data);
}