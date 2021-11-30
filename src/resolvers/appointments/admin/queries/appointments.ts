import { Appointment as AppointmentModel } from "@mystoreaid/prisma-models";
import { Appointment } from "resolvers/appointments/types";

export default async function appointments(parent: any, args: any): Promise<Array<Appointment>> | never {
    try {
        const include = {
            users_appointments_assignedToTousers: true,
            users_appointments_createdByTousers: true,
            users_appointments_lastModifiedByTousers: true,
            branches: true
        }
        const appointment: Array<Appointment> = await AppointmentModel.findManyForeignKey(include);
        return appointment;
    }
    catch(error: any) {
        throw new Error (`There was an error finding appointments`);
    }
}