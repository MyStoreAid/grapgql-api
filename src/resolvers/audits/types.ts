export type AuditId = string;

export interface Audit {
    id: AuditId,
    branchId: String,
    createdById: String,
    isActive: boolean,
    auditDate: number,
    status: String,
    lastModifiedById: String,
    last_modified: number,
    server_created_at: number,
    created_at: number,
    updated_at: number,
    deleted: boolean,
  }

  export interface AuditIdArgs{
      id: AuditId
  }