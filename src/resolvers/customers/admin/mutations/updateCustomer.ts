import { Customer } from '../../types';
import { Customer as CustomerModel } from "@mystoreaid/prisma-models";

export default async function updateCustomer (parent: any, args: Customer): Promise<Customer> | never{
    
    let existingCustomer!: Customer;
    const customerId: string = args.id;
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
    

    try {
        existingCustomer = await CustomerModel.findOne(customerId);
    } catch(error: unknown) {
       
        throw new Error(`There was an error fetching Customer with ID ${customerId}`);
    }

    if(!existingCustomer) {
        throw new Error(`There is no Customer with ID ${customerId}`);
    }
    
    return await CustomerModel.updateOneForeignKey(customerId, data);
}