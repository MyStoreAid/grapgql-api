import Model from "../../models/Model";

export default class SupplierModel extends Model {

    static get table() {
        return this.connection.suppliers;
    }

    static get timestampFields(): string[] {
        return [
            'created_at',
            'updated_at',
            'server_created_at',
            'last_modified',
            'dateAdded'
        ];
    }

    static get _allDeliveryDays() {
        return {
            "Monday": true,
            "Tuesday": true,
            "Wednesday": true,
            "Thursday": true,
            "Friday": true,
            "Saturday": true,
            "Sunday": true,
            "Everyday": true
          };
      };
      
}