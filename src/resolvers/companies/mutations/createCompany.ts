import { Company } from '../types';
import CompanyModel from '../CompanyModel';



export default async function createCompany (parent: any, args: Company, context: any): Promise<Company> {
    const data = {
        name: args.name,
        // businessCategory: args.businessCategoryId ? { connect: { id: args.businessCategoryId} } : undefined,
        // subscription: args.subscriptionId ? { connect : { id: args.subscriptionId }} : undefined,
        email: args.email,
        phone: args.phone,
        // internalBusinessCategory: args.internalBusinessCategoryId ? { connect: { id: args.internalBusinessCategoryId}} : undefined,
        // adminLastModifiedBy: args.adminLastModifiedBy,
        // lastModifiedBy: args.lastModifiedBy ? { connect: { id: args.lastModifiedBy}} : undefined,
        // lastSyncBy: args.lastSyncBy ? { connect: { id: args.lastSyncBy}} : undefined,
        
        
    }
  
    return await CompanyModel.createOne(context.prisma.companies, data);
}