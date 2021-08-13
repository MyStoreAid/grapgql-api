import TimeHelper from "helpers/TimeHelper";
import UuidHelper from "helpers/UuidHelper";
import { Brand } from "../types";

export class BrandModel {
    create(brand: Brand, context: any) {
        const currentTime: number = TimeHelper.currentTime;
        
        return context.prisma.brands.create({
            data: {
                id: UuidHelper.newUuid,
                name: brand.name,
                created_at: currentTime,
                updated_at: currentTime,
                server_created_at: currentTime,
                last_modified: currentTime,
            }
        });
    }
}