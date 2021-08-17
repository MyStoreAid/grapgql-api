export type BranchGoalId = string;

export interface BranchGoal {
    id: BranchGoalId,
    name: String,
    active: boolean,
    position: number,
    created_at: number,
    updated_at: number,
    last_modified: number,
    server_created_at: number,
    deleted: boolean,
}

export interface BranchGoalIdArgs {
    id: BranchGoalId,
}