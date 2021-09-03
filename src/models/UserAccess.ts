import Model from "./Model";

export default class UserAccessModel extends Model {
    static get primaryKeyName(): string {
        return 'userId';
    }
    
    static get timestampFields(): string[] {
        return [
            'created_at',
            'updated_at'
        ];
    }

    static async deleteOne(primaryKey: string): Promise<any> {
        if (this.softDelete) {
            const data: { deleted: boolean } = { deleted : true };
            this._setUpdateTimestampFields(data);

            return this.table.update({
                where: {
                    userId: primaryKey
                },
                data
            });
        } else {
            return this.table.delete({
                where: {
                    userId: primaryKey
                }
            });
        }
    }
}
