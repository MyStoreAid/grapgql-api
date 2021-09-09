import { CustomerIdArgs, Customer } from "../../types";
import { Customer as CustomerModel } from "@mystoreaid/prisma-models";

export default async function customer (parent: any, args: CustomerIdArgs): Promise<Customer> | never {
    
    let result!: Customer;
    const customerId: string = args.id;
    const data = { 
        users_customers_createdByTousers: true,
        users_customers_lastModifiedByTousers: true,
        branches_customers: true,
        sale_entries: true,
        sale_installments: true,
        sales: true,
    }

    try {
        result = await CustomerModel.findOneForeignKey(customerId, data);
    } catch (error: unknown) {
        throw new Error(`There was an error getting Customer with ID ${customerId}.`);
    }

    if (!result) {
        throw new Error(`There is no Customer with ID ${customerId}.`);
    }
    
    return result;


}