import { Branch } from '../../types';
import { Branch as BranchModel } from '@mystoreaid/prisma-models';
import UuidHelper from "../../../../helpers/UuidHelper";
import TimeHelper from "../../../../helpers/TimeHelper";



export default async function createBranch (parent: any, args: Branch): Promise<Branch> {
    const branch: String = UuidHelper.newUuid;
    const currentTime: number = TimeHelper.currentTime;

    let branchUsers: [{ branchId: String, userId: String}] | any = [];
    // if (args.branchUserIds.length > 0) {
    //     // for (let id of args.branchUserIds) {
    //     //     branchUsers.push({ 
    //     //         id: UuidHelper.newUuid,
    //     //         roleId: "9dd50b3c-d3e7-406e-8cf5-ea431ec23ef4",
    //     //         userId: id,
    //     //         companyId: "bbfe474e-d2e5-4fdf-a3d5-7dbfe0dac594",
    //     //         created_at: currentTime,
    //     //         updated_at: currentTime,
    //     //         server_created_at: currentTime,
    //     //         last_modified: currentTime,
    //     //     });
    //     // }
        
    // }
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
            users_branches: branchUsers.length > 0 ? { createMany : { data: branchUsers } } : undefined,
            

        },

        include: {
            appointments: true,
            branch_user_groups: true,
            business_categories: true,
            companies: true,
            users_branches: true,
        }
    }

    
    
    return BranchModel.createOneForeignKey(data);
}