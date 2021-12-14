import { Appointment as AppointmentModel } from "@mystoreaid/prisma-models";
import { AppointmentIdArgs, Appointment } from "resolvers/appointments/types";

export default async function appointment(parent: any, args: AppointmentIdArgs): Promise<Appointment> | never {
    const appointmentId: string = args.id;

    try {
        const include = {
            users_appointments_assignedToTousers: true,
            users_appointments_createdByTousers: true,
            users_appointments_lastModifiedByTousers: true,
            branches: true
        }
        const appointment: Appointment = await AppointmentModel.findOneForeignKey(appointmentId, include);
        return appointment;
    }
    catch(error: any) {
        throw new Error (`There was an error finding appointment with ID ${appointmentId}`);
    }
}