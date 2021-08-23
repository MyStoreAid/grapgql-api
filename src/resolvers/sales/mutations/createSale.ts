import { Sale } from '../types';
import SaleModel from '../SaleModel';



export default async function createSale (parent: any, args: Sale, context: any): Promise<Sale> {
    const data = {
        data: {
            note: args.note,
            paymentStatus: args.paymentStatus,
            discount: args.discount,
            receiptNumber: args.receiptNumber,
            type: args.type,
            paymentType: args.paymentType,
            audits: args.auditId ? { connect: { id: args.auditId} } : undefined,
            branches: args.branchId ? { connect: { id: args.branchId }} : undefined,
            users_sales_createdByTousers: args.createdById ? { connect: { id: args.createdById } } : undefined,
            customers: args.customerId ? { connect: { id: args.customerId}} : undefined,
            users_sales_lastModifiedByTousers: args.lastModifiedById ? { connect: { id: args.lastModifiedById} } : undefined

        },

        include: {
            audits: true,
            branches: true,
            users_sales_createdByTousers: true,
            customers: true,
            users_sales_lastModifiedByTousers: true,
            



        }
    }

    
    
    return SaleModel.createOneForeignKey(context.prisma.sales, data);
}