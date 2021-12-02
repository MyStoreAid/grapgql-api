import { Notification as NotificationModel} from '@mystoreaid/prisma-models';
import { Notification, SwitchProductArgs } from "../../types";

export default async function switchProduct (parent: any, args: SwitchProductArgs): Promise <Notification> | never {
    const branchId: string | undefined = args.branchId;
    const oldProductId: string = args.oldProductId;
    const newProductId: string = args.newProductId;

    const message: any = {
        oldProductId,
        newProductId
    }

    if(branchId) {
        message.branchId = branchId;
    }

    const params: any = {
        type: branchId ? 'branch_product_switch' : 'product_switch',
        message: JSON.stringify(message)
    }
    try {
        const notification: Notification = await NotificationModel.createOne(params);
        return notification;
    }
    catch(error: any) {
        throw new  Error(`There was an error switching products`)
    }
    
}