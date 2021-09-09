import { Company } from '../../types';
import { Company as CompanyModel } from "@mystoreaid/prisma-models";
import UuidHelper from "../../../../helpers/UuidHelper";

export default async function createCompany (parent: any, args: Company): Promise<Company> {
    const data = { 
        data: {
        name: args.name,
        business_categories: { connect: { id: args.businessCategoryId} },
        subscription: args.subscriptionId ? { connect : { id: args.subscriptionId }} : undefined,
        email: args.email,
        phone: args.phone,
        internalBusinessCategory: args.internalBusinessCategoryId ? { connect: { id: args.internalBusinessCategoryId}} : undefined,
        adminLastModifiedBy: args.adminLastModifiedBy,
        lastModifiedBy: args.lastModifiedBy ? { connect: { id: args.lastModifiedBy}} : undefined,
        lastSyncBy: args.lastSyncBy ? { connect: { id: args.lastSyncBy}} : undefined},

        include: {
            business_categories: true,
            subscriptions: true,
            internal_business_categories: true,
            

        }   
    }
  
    return await CompanyModel.createOneForeignKey(data);
}