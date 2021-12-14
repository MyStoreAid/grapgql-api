import { HealthCheck as HealthCheckModel } from "@mystoreaid/prisma-models";
import { HealthCheck, UpdateHealthCheckArgs } from "resolvers/healthChecks/types";

export default async function updateHealthCheck(parent: any, args: UpdateHealthCheckArgs): Promise<HealthCheck> | never {
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
        const data = JSON.parse(JSON.stringify(args))
        delete data.id;
        try {
            const include:any =  { users: true };
            const params: any = { data: data, include: include};
            healthCheck = await HealthCheckModel.updateOneForeignKey(healthCheckId, params);
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