import Model from "../../models/Model";

export default class UserModel extends Model {

    static get primaryKeyName(): string {
        return 'userId';
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