import { Appointment as AppointmentModel } from "@mystoreaid/prisma-models";
import { Appointment, AppointmentIdArgs } from "resolvers/appointments/types";

export default async function deleteAppointment(parent: any, args: AppointmentIdArgs): Promise<Appointment> | never {
    const appointmentId: string = args.id;
    let existingAppointment: Appointment;
    const message: string = `appointment with ID ${appointmentId}`;

    try{
        existingAppointment = await AppointmentModel.findOne(appointmentId);
    }
    catch(error: any) {
        throw new Error(`There was an error finding ${message}`);
    }
    
    if(existingAppointment) {
        try {
            const include = {
                users_appointments_assignedToTousers: true,
                users_appointments_createdByTousers: true,
                users_appointments_lastModifiedByTousers: true,
                branches: true
            }
            const appointment: Appointment = await AppointmentModel.deleteOneForeignKey(appointmentId, include);
            return appointment;
        }
        catch(error: any) {
            throw new Error (`There was an error updating ${message}`);
        }
    }
    else {
        throw new Error (`There exists no ${message}`);
    }
    
}