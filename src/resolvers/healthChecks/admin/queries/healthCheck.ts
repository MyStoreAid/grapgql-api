import { HealthCheck as HealthCheckModel } from "@mystoreaid/prisma-models";
import { HealthCheck, HealthCheckIdArgs } from "resolvers/healthChecks/types";

export default async function healthCheck(parent: any, args: HealthCheckIdArgs): Promise<HealthCheck> | never {
    const healthCheckId: string = args.id;
    const message: string = `Health Check with ID ${healthCheckId}`;

    try {
        const include:any =  { users: true };
        const healthCheck: HealthCheck = await HealthCheckModel.findOneForeignKey(healthCheckId, include);
        return healthCheck;
    }
    catch(error: any) {
        throw new Error(`There was error finding ${message}`);
    }
}