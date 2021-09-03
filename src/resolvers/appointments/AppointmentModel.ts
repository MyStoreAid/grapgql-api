import Model from "../../models/Model";

export default class AppointmentModel extends Model {
    static get timestampFields(): string[] {
        return [
            'created_at',
            'updated_at',
            'server_created_at',
            
        ];
    }

    static get table() {
        return this.connection.appointments;
    }
}