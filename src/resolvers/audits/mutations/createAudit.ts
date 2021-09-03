import { Audit } from '../types';
import AuditModel from '../AuditModel';



export default async function createAudit (parent: any, args: Audit): Promise<Audit> {
    const data = {
        data: {
            branches:  { connect: { id: args.branchId } } ,
            users_audits_createdByTousers: args.createdById ? { connect: { id: args.createdById } } : undefined,
            isActive: args.isActive,
            auditDate: args.auditDate,
            status: args.status,
            users_audits_lastModifiedByTousers: args.lastModifiedById ? { connect: { id: args.lastModifiedById } } : undefined

        },

        include: {
            branches: true,
            users_audits_createdByTousers: true,
            users_audits_lastModifiedByTousers: true,
            
        }
    }

    
    
    return AuditModel.createOneForeignKey(data);
}