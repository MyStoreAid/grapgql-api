import { HealthCheck as HealthCheckModel } from "@mystoreaid/prisma-models";
import { HealthCheck, HealthCheckIdArgs } from "resolvers/healthChecks/types";

export default async function deleteHealthCheck(parent: any, args: HealthCheckIdArgs): Promise<HealthCheck> | never {
    const healthCheckId: string = args.id;
    const message: string = `Health Check with ID ${healthCheckId}`;
    let healthCheck: HealthCheck;

    try {
        const include:any =  { users: true };
        healthCheck = await HealthCheckModel.findOneForeignKey(healthCheckId, include);
    }
    catch(error: any) {
        throw new Error(`There was error finding ${message}`);
    }

    if(healthCheck){
        try {
            const include:any =  { users: true };
            healthCheck = await HealthCheckModel.deleteOneForeignKey(healthCheckId, include);
            return healthCheck;
        }
        catch(error: any) {
            throw new Error(`There was error finding ${message}`);
        }

    }
    else {
        throw new Error(`There exists no ${message}`);
    }
}