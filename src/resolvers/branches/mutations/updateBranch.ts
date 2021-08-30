import BranchModel from "../BranchModel";
import { Branch } from "../types";

export default async function updateBranch(parent: any, args: Branch, context: any): Promise<Branch> | never {
    let existingBranch!: Branch;
    const branchId: string = args.id;
    
    try {
        existingBranch = await BranchModel.findOne(context.prisma.branches, branchId);
    } catch(error: unknown) {
        console.error(error);
        throw new Error(`There was an error fetching Branchs with ID ${branchId}`);
    }

    if(!existingBranch) {
        throw new Error(`There is no Branch with ID ${branchId}`);
    }

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
            checkoutSales: args.checkoutSales,
            aggregateSales: args.aggregateSales,
            alwaysSync: args.alwaysSync,
            forTesting: args.forTesting,
            supplierStock: args.supplierStock,
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
            user_branches: args.userIds ? { connect : { id: args.userIds} } : undefined,
            

        },

        include: {
            appointments: true,
            branch_user_groups: true,
            business_categories: true,
            companies: true,
            user_branches: true,
        }
    }

    return BranchModel.updateOneForeignKey(context.prisma.branches, branchId, data)


}