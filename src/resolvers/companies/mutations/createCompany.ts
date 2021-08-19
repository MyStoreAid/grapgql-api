import { Company } from '../types';
import CompanyModel from '../CompanyModel';
import UuidHelper from "../../../helpers/UuidHelper";




export default async function createCompany (parent: any, args: Company, context: any): Promise<Company> {
    const data = { 
        data: {
        name: args.name,
        business_categories: args.businessCategoryId ? { connect: { id: args.businessCategoryId} } : { create: { name: "The Lite" } },
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
  
    return await CompanyModel.createOneForeignKey(context.prisma.companies, data);
}