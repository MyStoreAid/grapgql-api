import { Audit, AuditIdArgs } from '../types';
import AuditModel from '../AuditModel';


export default async function deleteAudit (parent: any, args: AuditIdArgs): Promise<Audit> | never{
    
    let existingAudit!: Audit;
    const auditId: string = args.id;

    try {
        existingAudit = await AuditModel.findOne(auditId);
    } catch(error: unknown) {
        
        throw new Error(`There was an error fetching Audit with ID ${auditId}`);
    }

    if(!existingAudit) {
        throw new Error(`There is no Audit with ID ${auditId}`);
    }
    
    return await AuditModel.deleteOne(auditId)
}