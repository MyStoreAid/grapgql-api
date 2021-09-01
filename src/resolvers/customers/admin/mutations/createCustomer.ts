import { Customer } from '../../types';
import CustomerModel from '../../CustomerModel';



export default async function createCustomer (parent: any, args: Customer, context: any): Promise<Customer> {
    const data = {
        data: { 
            firstName: args.firstName,
            otherNames: args.otherNames,
            phone: args.phone,
            email: args.email,
            location: args.location,
            isTemporary: args.isTemporary,
            type: args.type,
            users_customers_createdByTousers: args.createdById ? { connect : { id: args.createdById } } : undefined,
            users_customers_lastModifiedByTousers: args.lastModifiedById ? { connect: { id: args.lastModifiedById} } : undefined,
            branches_customers: args.branchesCustomerIds ? { connect: {id: args.branchesCustomerIds}} : undefined,
            sale_entries: args.saleEntryIds ? { connect: { id: args.saleEntryIds } } : undefined,
            sale_installments: args.saleInstallmentIds ? { connect: { id: args.saleEntryIds } } : undefined,
            sales: args.saleIds ? { connect: { id: args.saleIds} } : undefined

        },

        include: {
            users_customers_createdByTousers: true,
            users_customers_lastModifiedByTousers: true,
            branches_customers: true,
            sale_entries: true,
            sale_installments: true,
            sales: true,


        }
    }

    
    
    return CustomerModel.createOneForeignKey(context.prisma.customers, data);
}