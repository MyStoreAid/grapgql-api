import { Appointment as AppointmentModel } from "@mystoreaid/prisma-models";
import { Appointment, UpdateAppointmentArgs } from "resolvers/appointments/types";

export default async function updateAppointment(parent: any, args: UpdateAppointmentArgs): Promise<Appointment> | never {
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
        const data: any = JSON.parse(JSON.stringify(args));
        delete data.id;

        try {
            const include = {
                users_appointments_assignedToTousers: true,
                users_appointments_createdByTousers: true,
                users_appointments_lastModifiedByTousers: true,
                branches: true
            }
            const params = {data: data, include: include};
            const appointment: Appointment = await AppointmentModel.updateOneForeignKey(appointmentId, params);
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