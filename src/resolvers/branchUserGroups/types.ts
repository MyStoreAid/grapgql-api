export interface BranchUserGroup {
    id: String,
    name: String,
    description: String,
    created_at: number,
    updated_at: number, 
    deleted: boolean,
}

export interface BranchUserGroupIdArgs {
    id: String 
}
