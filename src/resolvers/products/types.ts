import { Brand } from "../../resolvers/brands/types";
import { Manufacturer } from "../../resolvers/manufacturers/types";
import { MeasurementUnit } from "../../resolvers/measurementUnits/types";
import { ProductCategory } from "../../resolvers/productCategories/types";
import { ProductDescription } from "../../resolvers/productDescriptions/types";
import { ProductSegment } from "../../resolvers/productSegments/types";
import { User } from "../../resolvers/users/types";

export type ProductId = string;

export interface CreateProduct extends Product {
    branchId: string
}

export interface Product {
    id: ProductId
    name: String
    description: String
    summary: String
    barCode: String
    manufacturerId: String 
    brandId: String
    productCategoryId: String
    productSegmentId: String
    measuerementUnitId: String
    weight: number
    image: String
    isTemporary: boolean
    adminLastModifiedBy: String
    lastModifiedBy: String
    brands?: any
    product_descriptions?: any
    users?: any
    manufacturers?: any
    measurement_units?: any
    product_categories?: any
    product_segments?: any
    created_at: number
    updated_at: number
    last_modified: number
    server_created_at: number
    deleted: boolean
}

export interface ProductIdArgs {
    id: ProductId

}