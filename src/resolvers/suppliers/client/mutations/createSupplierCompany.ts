import { SupplierCompanyInput } from '../../types';
import { Company } from '../../../../resolvers/companies/types';
import { Branch as BranchModel, 
        Company as CompanyModel, 
        Subscription as SubscriptionModel, 
        Customer as CustomerModel, 
        BranchesCustomer as BranchesCustomerModel
    } from "@mystoreaid/prisma-models";
import { Branch } from '../../../../resolvers/branches/types';
import { Subscription } from 'resolvers/subscriptions/types';
import { Customer } from 'resolvers/customers/types';

export default async function createSupplierCompany (parent: any, args: SupplierCompanyInput): Promise<Company> | never {
    const branchId: string  = args.branchId;

    try {
        const customerBranch: Branch = await BranchModel.findOne(branchId);
        // Add default subscription
        const customerCompany: Company = await CompanyModel.findOne(customerBranch.companyId);
        if (customerBranch && customerCompany){
            const companyParams: {data: any, include: any} = {data: {}, include: {}};
            companyParams.data.name = args.name;
            companyParams.data.phone = args.phone;
            companyParams.data["business_categories"] = { connect: { id: customerCompany.businessCategoryId } };
            companyParams.include["business_categories"] = true;
            companyParams.include.subscriptions = true;
            //companyParams subsciption

            const branchParams: {data: any, include: any}  = JSON.parse(JSON.stringify(companyParams));
            branchParams.data.location = branchParams.data.name;
            branchParams.data.whatsAppPhone = branchParams.data.phone;
            delete branchParams.include.subscriptions;

            const supplierCompany: Company = await CompanyModel.createOneForeignKey(companyParams);
            branchParams.data.companies = { connect: { id: supplierCompany.id } };
            branchParams.include.companies = true;
            const supplierBranch: Branch = await BranchModel.createOneForeignKey(branchParams);

            const updatedSupplierCompany: Company = await CompanyModel.updateOneForeignKey(supplierCompany.id, {
                data:
                    { branches: { connect:{ id: supplierBranch.id} } },
                include:
                    { branches: true}
            });

            const customerBranchAsCustomer: Customer = await CustomerModel.createOne({
                                                        firstName: customerBranch.name,
                                                        phone: args.phone,
                                                        type: 'Branch',
                                                        entityId: branchId,
                                                        location: customerBranch.location,
                                                        isTemporary: true
                                                    });

            await BranchesCustomerModel.createOneForeignKey({
                data: 
                    { customers: { connect: { id: customerBranchAsCustomer.id} },
                      branches: { connect: { id: supplierBranch.id}}                    
                    },
                include:
                    { branches: true,
                      customers: true,
                    }
            });
            return updatedSupplierCompany;
        }
        else {
            throw new Error(`There exists no customer Branch with ID ${branchId} | There exists no Customer Company with ID ${customerBranch.companyId}`)
        }
    }
    catch(error: any) {
        throw new Error(error);
    }      
}