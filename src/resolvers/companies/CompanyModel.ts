import Model from "../../models/Model";

export default class CompanyModel extends Model {
    static get timestampFields(): string[] {
        return [
            'created_at',
            'updated_at',
            'lastSyncAt'
        ];
    }
    
}