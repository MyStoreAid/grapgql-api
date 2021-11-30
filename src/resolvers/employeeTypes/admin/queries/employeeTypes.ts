import { EmployeeType as EmployeeTypeModel } from "@mystoreaid/prisma-models";
import { EmployeeType } from "../../types";

export default async function employeeTypes(parent: any, args: any): Promise<Array<EmployeeType>> {
    try{
        const employeeTypes: Array<EmployeeType> = await EmployeeTypeModel.findMany();
        return employeeTypes
    }
    catch(error: any) {
        throw new Error(`There was an error finding employee types`);
    }
    
}