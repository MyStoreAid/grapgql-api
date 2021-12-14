import { EmployeeType as EmployeeTypeModel } from "@mystoreaid/prisma-models";
import { EmployeeType, CreateEmployeeTypeArgs} from "../../types";

export default async function createEmployeeType(parent: any, args: CreateEmployeeTypeArgs): Promise<EmployeeType> | never {
    
    try{
        const employeeType: EmployeeType = await EmployeeTypeModel.createOne(args);
        return employeeType;
    }
    catch(error: any) {
        throw new Error(`There was an error creating employee type`);
    }
    
}