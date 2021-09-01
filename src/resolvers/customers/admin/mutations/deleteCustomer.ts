import { Customer, CustomerIdArgs } from '../../types';
import CustomerModel from '../../CustomerModel';


export default async function deleteCustomer (parent: any, args: CustomerIdArgs, context: any): Promise<Customer> | never{
    
    let existingCustomer!: Customer;
    const customerId: string = args.id;

    try {
        existingCustomer = await CustomerModel.findOne(context.prisma.customers, customerId);
    } catch(error: unknown) {
        
        throw new Error(`There was an error fetching Customer with ID ${customerId}`);
    }

    if(!existingCustomer) {
        throw new Error(`There is no Customer with ID ${customerId}`);
    }
    
    return await CustomerModel.deleteOne(context.prisma.customers, customerId)
}