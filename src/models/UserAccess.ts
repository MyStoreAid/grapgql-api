import Model from "./Model";

export default class UserAccess extends Model {
    static get primaryKeyName(): string {
        return 'userId';
    }
    
    static get timestampFields(): string[] {
        return [
            'created_at',
            'updated_at'
        ];
    }
}