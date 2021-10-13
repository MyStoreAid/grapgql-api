import { Role as RoleModel, User as UserModel, UserBranch as UserBranchModel, UserCompany as UserCompanyModel} from "@mystoreaid/prisma-models/lib";
import { Role } from "../../../../resolvers/roles/types";
import { SupplierSalespersonInput } from "../../../../resolvers/suppliers/types";
import { generateHash } from "../../../../resolvers/users/helpers";
import { User } from "../../../../resolvers/users/types";



export default async function createSupplierSalesperson(parent: any, args: SupplierSalespersonInput): Promise<User> | never {
    const branchId: string = args.branchId;
    const supplierBranchId: string = args.supplierBranchId;
    const supplierCompanyId: string = args.supplierCompanyId;
    const salespersonInfo: any = args.salesperson;

    //Initialize RoleSalesperson
    //temporary salesperson

    const salesRole: Role = await RoleModel.findOneWhere({name: "Sales"});

    try {
        const userParams: any = JSON.parse(JSON.stringify(salespersonInfo));
        userParams.whatsAppPhone = userParams.phone;
        userParams.username = userParams.phone;

        let salesperson: User = await UserModel.createOne(userParams);
        salesperson = await UserModel.updateOne(salesperson.userId, { password: await generateHash(userParams.username.slice(1, 3) + salesperson.userId.slice(1, 5)) });

        await UserCompanyModel.createOneForeignKey({
            data: 
                { 
                    users: { connect: { userId: salesperson.userId}},
                    companies: { connect: { id: supplierCompanyId}},
                    roles: { connect: { id: salesRole.id}}
                },
            include: {
                users: true,
                companies: true,
                roles: true,
            }
        });

        await UserBranchModel.createOneForeignKey({
            data: 
                { 
                    users: { connect: { userId: salesperson.userId} },
                    companies: { connect: { id: supplierCompanyId} },
                    roles: { connect: { id: salesRole.id}},
                    branches: { connect: { id: supplierBranchId } },
                    //add salesperson role here
                },
            include: {
                users: true,
                companies: true,
                roles: true,
                branches: true
            }
        });
        return salesperson;
    }
    catch(error: any) {
        throw new Error(error);
    }
}