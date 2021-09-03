import { AuditIdArgs, Audit } from "../../types";
import AuditModel from "../../AuditModel";

export default async function audit (parent: any, args: AuditIdArgs): Promise<Audit> | never {
    
    let result!: Audit;
    const auditId: string = args.id;
    const data = { 
        branches: true,
        users_audits_createdByTousers: true,
        users_audits_lastModifiedByTousers: true,
    }

    try {
        result = await AuditModel.findOneForeignKey(auditId, data);
    } catch (error: unknown) {
        throw new Error(`There was an error getting Audit with ID ${auditId}.`);
    }

    if (!result) {
        throw new Error(`There is no Audit with ID ${auditId}.`);
    }
    
    return result;


}