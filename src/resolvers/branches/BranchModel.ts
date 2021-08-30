import { PrismaModelContext } from "types/prisma";
import Model from "../../models/Model";

export default class BranchModel extends Model{
    static async createOneForeignKey(context: PrismaModelContext, params: any): Promise<any> {
        const data = params.data;
        const include = params.include;

        this._setTimestampToFields(data);
       

        return context.create({ data, include });
    }
    
}