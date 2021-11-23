import { CustomerCareSchedule as CustomerCareScheduleModel} from "@mystoreaid/prisma-models";
import { CustomerCareSchedule, CustomerCareSchedulePayload } from "resolvers/customerCareSchedules/types";

export default async function (parent: any, args: CustomerCareSchedulePayload): Promise<CustomerCareSchedule> | never {
    const userId: string = args.userId;
    const scheduleType: string = args.scheduleType;

    try {
        const condition: any = { AND: [ { userId: userId }, {status: scheduleType} ] }
        const include: any = {
            companies: true,
            branches: true,
            users_customer_care_schedules_createdByTousers: true,
            users_customer_care_schedules_lastModifiedByTousers: true,
            users_customer_care_schedules_userIdTousers: true
        }
        const schedule: CustomerCareSchedule = await CustomerCareScheduleModel.findManyWhereForeignKey(condition, include);
        return schedule;
    }
    catch(error: any) {
        throw new Error(`There was an error finding the schedule for User with User ID ${error}`);
    }
}