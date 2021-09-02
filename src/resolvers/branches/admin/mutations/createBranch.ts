import { Branch } from '../../types';
import BranchModel from '../../BranchModel';
import UuidHelper from "../../../../helpers/UuidHelper";
import TimeHelper from "../../../../helpers/TimeHelper";



export default async function createBranch (parent: any, args: Branch, context: any): Promise<Branch> {
    const branch: String = UuidHelper.newUuid;
    const currentTime: number = TimeHelper.currentTime;

    let branchUsers: [{ branchId: String, userId: String}] | any = [];
    if (args.branchUserIds.length > 0) {
        // for (let id of args.branchUserIds) {
        //     branchUsers.push({ 
        //         id: UuidHelper.newUuid,
        //         roleId: "d8cac356-8c1b-4099-adaf-66331da368da",
        //         userId: id,
        //         companyId: "a70d4b8e-fad3-4a6b-b234-fc864c87d59b",
        //         created_at: currentTime,
        //         updated_at: currentTime,
        //         server_created_at: currentTime,
        //         last_modified: currentTime,
        //     });
        // }
        
    }
    const data: any = {
        data: {
            id: branch,
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
            users_branches: args.branchUserIds.length > 0 ? { createMany : { data: branchUsers } } : undefined,
            

        },

        include: {
            appointments: true,
            branch_user_groups: true,
            business_categories: true,
            companies: true,
            users_branches: true,
        }
    }

    
    
    return BranchModel.createOneForeignKey(context.prisma.branches, data);
}