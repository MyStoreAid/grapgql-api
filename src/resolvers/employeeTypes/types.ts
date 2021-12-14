export type EmployeeTypeId = string;

export interface CreateEmployeeTypeArgs {
    name: String
    description: String
}

export interface EmployeeType {
    id: EmployeeTypeId 
    name: String 
    description: String 
    deleted: Boolean
    created_at: number
    updated_at: number
}

export interface EmployeeTypeIdArgs {
    id: EmployeeTypeId
}

export interface UpdateEmployeeTypeArgs  extends CreateEmployeeTypeArgs {
    id: string
}