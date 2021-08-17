export type BranchUserGroupId = string;
export interface BranchUserGroup {
    id: BranchUserGroupId,
    name: String,
    description: String,
    created_at: number,
    updated_at: number, 
    deleted: boolean,
}

export interface BranchUserGroupIdArgs {
    id: BranchUserGroupId, 
}
