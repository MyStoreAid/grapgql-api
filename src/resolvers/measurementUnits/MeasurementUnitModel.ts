import Model from "../../models/Model";

export default class MeasurementUnitModel extends Model {

    static get table() {
        return this.connection.measurement_units;
    }

    static get timestampFields(): string[] {
        return [
            'created_at',
            'updated_at',
            'server_created_at',
            'last_modified'
        ];
    }
}