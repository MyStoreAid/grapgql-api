import { Audit } from '../types';
import AuditModel from '../AuditModel';


export default async function updateAudit (parent: any, args: Audit, context: any): Promise<Audit> | never{
    
    let existingAudit!: Audit;
    const auditId: string = args.id;
    const include = {product_segments: true}
    const data = {
        data: {
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
    

    try {
        existingAudit = await AuditModel.findOne(context.prisma.audits, auditId);
    } catch(error: unknown) {
       
        throw new Error(`There was an error fetching Audit with ID ${auditId}`);
    }

    if(!existingAudit) {
        throw new Error(`There is no Audit with ID ${auditId}`);
    }
    
    return await AuditModel.updateOneForeignKey(context.prisma.audits, auditId, data);
}