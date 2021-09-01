import { Branch } from '../../types';
import BranchModel from '../../BranchModel';
import UuidHelper from "../../../../helpers/UuidHelper";
import TimeHelper from "../../../../helpers/TimeHelper";



export default async function createBranch (parent: any, args: Branch, context: any): Promise<Branch> {
    const branch: String = UuidHelper.newUuid;
    const currentTime: number = TimeHelper.currentTime;

    let branchUsers: [{ branchId: String, userId: String}] | any = [];
    if (args.userIds.length > 0) {
        // for (let id of args.userIds) {
        //     branchUsers.push({ 
        //         id: UuidHelper.newUuid,
        //         roleId: "49c2829d-e988-4ad6-8e41-568bd5c02260",
        //         userId: id,
        //         companyId: "9afd12ff-202a-486f-b976-459307d0f8b2",
        //         created_at: currentTime,
        //         updated_at: currentTime,
        //         server_created_at: currentTime,
        //         last_modified: currentTime,
        //     });
        // }
        //Needs touchup
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
            users_branches: args.userIds.length > 0 ? { createMany : { data: branchUsers } } : undefined,
            

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