import UserBranchModel from "resolvers/userBranches/UserBranchModel";
import UserModel from "resolvers/users/UserModel";
import Model from "../../models/Model";

export default class BranchModel extends Model {
    
    static get tableName() {
        return 'branches';
    }

    static get fieldNamesWithTableName() {
        return this.fieldNames.map((name) => `${this.tableName}.${name}`);
    }

    static get rawFieldNamesWithTableName() {
        return this.fieldNamesWithTableName.map((fieldName) => `"${fieldName.split('.').join('"."')}"`);
    }

    static async mainCustomerCare(branchId: string) {
        const mainUserBranch = await UserBranchModel.findOneWhere({main: true, branchId});
        if (mainUserBranch) {
          const mainCustomerCare = await UserModel.findOneWhere({ userId: mainUserBranch.userId, deleted: false });
    
          delete mainCustomerCare.password;
          return mainCustomerCare;
        }
    
        return null;
    }

    static get fieldNames() {
        return [
            'id',
            'name',
            'address',
            'location',
            'gps',
            'logo',
            'phone',
            'whatsAppPhone',
            'companyId',
            'startDate',
            'isMainBranch',
            'nextAuditDate',
            'lastAuditDate',
            'checkoutSales',
            'aggregateSales',
            'supplierStock',
            'type',
            'action',
            'syncInterval',
            'alwaysSync',
            'businessCategoryId',
            'forTesting',
            'longitude',
            'latitude',
            'country',
            'region',
            'city',
            'workingDays',
            'sourcesOfPurchases',
            'phoneType',
            'otherServices',
            'locationType',
            'storeImage',
            'serviceType',
            'buildingStructure',
            'coolerBrands',
            'coolerTypes',
            'electricity',
            'yearOfEstablishment',
            'adminLastModifiedBy',
            'lastModifiedBy',
            'created_at',
            'updated_at',
            'appointmentId',
            'branchUserGroupId',
            'createdBy',
            'auditDuration',
        ];
    }
    
}