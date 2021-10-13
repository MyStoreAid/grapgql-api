import { Supplier as SupplierModel} from "@mystoreaid/prisma-models";
import { Supplier } from '../../types';

export default async function createSupplier (parent: any, args: Supplier): Promise<Supplier> {
    const data = {
        data: {
            name: args.name,
            phone: args.phone,
            email: args.email,
            isTemporary: args.isTemporary,
            users_suppliers_createdByTousers: args.createBy ? { connect: { id: args.createBy} } : undefined,
            users_suppliers_lastModifiedByTousers: args.lastModifiedBy ? { connect: { id: args.lastModifiedBy} } : undefined
        },
        include: {
            users_suppliers_createdByTousers: true,
            users_suppliers_lastModifiedByTousers: true
        }
    };

    return await SupplierModel.createOneForeignKey(data)
}