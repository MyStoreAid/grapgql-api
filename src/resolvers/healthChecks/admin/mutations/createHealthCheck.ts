import { HealthCheck as HealthCheckModel } from "@mystoreaid/prisma-models";
import { HealthCheck, HealthCheckArgs } from "resolvers/healthChecks/types";

export default async function createHealthCheck(parent: any, args: HealthCheckArgs): Promise<HealthCheck> | never {
    try {
        const include:any =  { users: true };
        const params: any = { data: args, include: include}
        const healthCheck: HealthCheck = await HealthCheckModel.createOneForeignKey(params);
        return healthCheck;
    }
    catch(error: any) {
        throw new Error(`There was error creating Health Check`);
    }
}