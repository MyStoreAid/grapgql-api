import { EmployeeType as EmployeeTypeModel } from "@mystoreaid/prisma-models";
import { EmployeeType, UpdateEmployeeTypeArgs} from "../../types";

export default async function updateEmployeeType(parent: any, args: UpdateEmployeeTypeArgs): Promise<EmployeeType> | never{
    const employeeTypeId: string = args.id;
    
    try{
        const employeeType: EmployeeType = await EmployeeTypeModel.findOne(employeeTypeId);
        if(employeeType){
            const data: any = JSON.parse(JSON.stringify(args));
            delete data.id;
            const updatedEmployeeType: EmployeeType = await EmployeeTypeModel.updateOne(employeeTypeId, data);
            return updatedEmployeeType;
        }
        else{
            throw new Error(`There exists no Employee Type with ID ${employeeTypeId}`);
        }
    }
    catch(error: any) {
        throw new Error(`There was an error updating employee type with ID ${employeeTypeId}`);
    }
    
}