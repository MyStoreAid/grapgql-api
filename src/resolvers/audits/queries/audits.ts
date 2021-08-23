import { Audit } from "../types";
import AuditModel from "../AuditModel";

export default async function audits (parent: any, args: Audit, context: any): Promise<Audit[]> {

    const data = { 
        branches: true,
        users_audits_createdByTousers: true,
        users_audits_lastModifiedByTousers: true,
    }
    
    return await AuditModel.findManyForeignKey(context.prisma.audits, data);
}