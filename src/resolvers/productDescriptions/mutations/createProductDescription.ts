import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

export default async function createProductDescription (parent: any, args: any, context: any) {
    const currentTime = moment().toDate().getTime();


    return await context.prisma.product_descriptions.create({
        data: {
            id: uuidv4(),
            name: args.name,
            summary: args.summary,
            created_at: currentTime ,
            updated_at: currentTime,
            server_created_at: currentTime,
            last_modified: currentTime,
        }
    });
}