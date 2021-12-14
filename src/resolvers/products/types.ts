import { Brand } from "../../resolvers/brands/types";
import { Manufacturer } from "../../resolvers/manufacturers/types";
import { MeasurementUnit } from "../../resolvers/measurementUnits/types";
import { ProductCategory } from "../../resolvers/productCategories/types";
import { ProductDescription } from "../../resolvers/productDescriptions/types";
import { ProductSegment } from "../../resolvers/productSegments/types";
import { User } from "../../resolvers/users/types";

export type ProductId = string;

export interface BranchProductArgs {
    productId: String
    branchId: String
    lowestStock: number
    quantity: number
    createdBy: String
    sellingPrice: number
    packs: [number]
    packList: JSON
    defaultPack: JSON
    hidden: Boolean
    lastModifiedBy: String
}

export interface ClientCreateProduct extends Product {
    branchId: string
}

export interface CreateProduct extends Product {
    branchId: string
}

export interface NewProductArgs {
    branchId: string
    product: ProductArgs
    branchProduct: BranchProductArgs
}

export interface Notification {
    id: string
    type: String
    deleted: Boolean 
    server_created_at: number
    last_modified: number
    created_at: number
    updated_at: number
    message: String
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
    product_segments?: any
    created_at: number
    updated_at: number
    last_modified: number
    server_created_at: number
    deleted: boolean
    brands: any
    measurement_units: any
    manufacturers: any
    product_descriptions: any
    product_categories: any
    product_segment: any
}

export interface ProductIdArgs {
    id: ProductId

}

export interface ProductArgs {
    name: String
    description: String
    summary: String
    barCode: String
    weight: number
    image: String
    isTemporary: Boolean
    adminLastModifiedBy: String
    productCategoryId?: string
    productSegmentEntryId?: string
    productSegmentEntryIds?: Array<String>
}

export interface SwitchProductArgs {
    branchId?: string
    oldProductId: string
    newProductId: string
}
