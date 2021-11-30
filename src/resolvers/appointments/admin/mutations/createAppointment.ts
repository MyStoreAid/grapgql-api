import { Appointment as AppointmentModel } from "@mystoreaid/prisma-models";
import { Appointment, AppointmentArgs } from "resolvers/appointments/types";

export default async function createAppointment(parent: any, args: AppointmentArgs): Promise<Appointment> | never {
    try {
        const include = {
            users_appointments_assignedToTousers: true,
            users_appointments_createdByTousers: true,
            users_appointments_lastModifiedByTousers: true,
            branches: true
        }
        const params = {data: args, include: include};
        const appointment: Appointment = await AppointmentModel.createOneForeignKey(params);
        return appointment;
    }
    catch(error: any) {
        throw new Error (`There was an error creating appointment`);
    }
}