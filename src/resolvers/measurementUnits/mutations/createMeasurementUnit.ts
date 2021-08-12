import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

export default async function createMeasurementUnit (parent: any, args: any, context: any) {
    const currentTime = moment().toDate().getTime();

    return await context.prisma.measurement_units.create({
        data: {
            id: uuidv4(),
            name: args.name,
            symbol: args.symbol,
            created_at: currentTime,
            updated_at: currentTime,
            server_created_at: currentTime,
            last_modified: currentTime,
        }
    });
}