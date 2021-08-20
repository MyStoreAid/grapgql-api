import { Branch } from '../types';
import BranchModel from '../BranchModel';



export default async function createBranch (parent: any, args: Branch, context: any): Promise<Branch> {
    const data = {
        data: {
            name: args.name,
            startDate: args.startDate,
            address: args.address,
            location: args.location,
            logo: args.logo,
            phone: args.phone,
            whatsAppPhone: args.whatsAppPhone,
            type: args.type,
            action: args.action,
            syncInterval: args.syncInterval,
            gps: args.gps,
            latitude: args.latitude,
            longitude: args.longitude,
            country: args.country,
            region: args.region,
            city: args.city,
            workingDays: args.workingDays,
            sourcesOfPurchases: args.sourcesOfPurchases,
            phoneType: args.phoneType,
            otherServices: args.otherServices,
            locationType: args.locationType,
            storeImage: args.storeImage,
            serviceType: args.serviceType,
            buildingStructure:args.buildingStructure,
            coolerBrands: args.coolerBrands,
            coolerTypes: args.coolerTypes,
            electricity: args.electricity,
            yearOfEstablishment: args.yearOfEstablishment,
            appointments: args.appointmentId ? { connect : {id: args.appointmentId}} : undefined ,
            branch_user_groups: args.branchUserGroupId ? { connect: { id: args.branchUserGroupId } } : undefined,
            business_categories: args.businessCategoryId ? { connect: { id: args.businessCategoryId } } : undefined,
            companies: args.companyId ? { connect: { id: args.companyId } } : undefined,
            users: args.userId ? { connect : { id: args.userId} } : undefined,
            

        },

        include: {
            appointments: true,
            branch_user_groups: true,
            business_categories: true,
            companies: true,
            users: true,
        }
    }

    
    
    return BranchModel.createOneForeignKey(context.prisma.branches, data);
}