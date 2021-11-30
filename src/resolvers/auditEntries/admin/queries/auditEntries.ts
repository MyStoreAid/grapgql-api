import { FindAuditEntriesArgs, AuditEntry } from "resolvers/auditEntries/types";
import { AuditEntry as AuditEntryModel, Audit as AuditModel } from "@mystoreaid/prisma-models";
import { Audit } from "../../../../resolvers/audits/types";

export default async function auditEntries (parent: any, args: FindAuditEntriesArgs): Promise<Array<AuditEntry>> | never {
    const auditId: string = args.auditId;
    let auditEntries: Array<AuditEntry> = [];

    try {
        const existingAudit: Audit = await AuditModel.findOne(auditId);

        if(existingAudit){
            const include: any = { products: { product_categories: true } }
            auditEntries = await AuditEntryModel.findManyWhereForeignKey({ auditId: auditId}, include);
            return auditEntries;
        }
        else {
            throw new Error(`There exists no Audit with ID ${auditId}`);
        }
    }
    catch(error: any) {
        throw new Error (`There was an error finding Audit with ID ${auditId}`)
    }
}