import Model from "../../models/Model";
import { PrismaModelContext } from "types/prisma";

export default class ClientModel extends Model {

    static get table() {
        return this.connection.clients;
    }

    static get primaryKeyName(): string {
        return 'name';
    }

    static get timestampFields(): string[] {
        return [
            'created_at',
            'updated_at',
            'lastSyncAt'
        ];
    }

    
    
}