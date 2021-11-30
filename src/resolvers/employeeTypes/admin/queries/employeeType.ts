import { EmployeeType as EmployeeTypeModel } from "@mystoreaid/prisma-models";
import { EmployeeType, EmployeeTypeIdArgs } from "../../types";

export default async function employeeType(parent: any, args: EmployeeTypeIdArgs): Promise<EmployeeType> | never {
    const employeeTypeId: string = args.id;
    
    try{
        const employeeType: EmployeeType = await EmployeeTypeModel.findOne(employeeTypeId);
        return employeeType;
    }
    catch(error: any) {
        throw new Error(`There was an error finding employee type with ID ${employeeTypeId}`);
    }
    
}