import { HealthCheck as HealthCheckModel } from "@mystoreaid/prisma-models";
import { HealthCheck } from "resolvers/healthChecks/types";

export default async function healthChecks(parent: any, args: any): Promise<Array<HealthCheck>> | never {
    const healthCheckId: string = args.id;

    try {
        const include:any =  { users: true };
        const healthCheck: Array<HealthCheck> = await HealthCheckModel.findManyForeignKey(healthCheckId);
        return healthCheck;
    }
    catch(error: any) {
        throw new Error(`There was error finding health Checks `);
    }
}