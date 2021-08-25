export type ProductId = string;

export interface Product {
    id: ProductId,
    name: String,
    description: String,
    summary: String,
    barCode: String,
    manufacturerId: String, 
    brandId: String,
    productCategoryId: String,
    productSegmentId: String,
    measuerementUnitId: String,
    weight: number,
    image: String,
    isTemporary: boolean,
    adminLastModifiedBy: String,
    lastModifiedBy: String,
    created_at: number,
    updated_at: number,
    last_modified: number,
    server_created_at: number,
    deleted: boolean
}

export interface ProductIdArgs {
    id: ProductId

}