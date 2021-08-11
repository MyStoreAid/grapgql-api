import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

export default function createInternalBusinessCategory (parent: any, args: any, context: any) {
    return context.prisma.internal_business_categories.create({
        data: {
            id: uuidv4(),
            name: args.name,
            description: args ? args.description : "",
            created_at: moment().toDate().getTime(),
            updated_at: moment().toDate().getTime(),
            
        }
    });
}