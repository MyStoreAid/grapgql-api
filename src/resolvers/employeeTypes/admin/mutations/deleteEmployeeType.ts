import { EmployeeType as EmployeeTypeModel } from "@mystoreaid/prisma-models";
import { EmployeeType, EmployeeTypeIdArgs} from "../../types";

export default async function deleteEmployeeType(parent: any, args: EmployeeTypeIdArgs): Promise<EmployeeType> | never{
    const employeeTypeId: string = args.id;
    
    try{
        const employeeType: EmployeeType = await EmployeeTypeModel.findOne(employeeTypeId);
        if(employeeType){
            const updatedEmployeeType: EmployeeType = await EmployeeTypeModel.deleteOne(employeeTypeId);
            return updatedEmployeeType;
        }
        else{
            throw new Error(`There exists no Employee Type with ID ${employeeTypeId}`);
        }
    }
    catch(error: any) {
        throw new Error(`There was an error deleting employee type with ID ${employeeTypeId}`);
    }
    
}