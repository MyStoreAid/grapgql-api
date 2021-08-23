import Model from "../../models/Model";
import UuidHelper from "../../helpers/UuidHelper";
import TimeHelper from "../../helpers/TimeHelper";
import { PrismaModelContext } from "types/prisma";

export default class ProductSegmentEntryModel extends Model {
    static get timestampFields(): string[] {
        return [
            'created_at',
            'updated_at',
            'server_created_at',
            'last_modified'
        ];
    }

    

   
}