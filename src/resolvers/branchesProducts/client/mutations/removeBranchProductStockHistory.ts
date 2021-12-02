import { 
    BranchProductStockHistory as BranchProductStockHistoryModel, 
    BranchProductStock as BranchProductStockModel,
    Branch as BranchModel 
} from "@mystoreaid/prisma-models";
import { Branch } from "../../../../resolvers/branches/types";
import { BranchProductsStocksHistory, RemoveHistoryArgs } from "resolvers/branchesProducts/types";

export default async function removeBranchProductStockHistory(parent: any, args: RemoveHistoryArgs): Promise<Array<BranchProductsStocksHistory>> | never {
    const branchId: string = args.branchId;
    const historyIds: any = args.historyIds;
    let deletedStockHistories: Array<BranchProductsStocksHistory> = [];
    let existingBranch: Branch;
    let deletedStockHistory: BranchProductsStocksHistory;

    try {
        existingBranch = await BranchModel.findOne(branchId);
    }
    catch(error: any) {
        throw new Error(`There was an error finding branch with ID ${branchId}`);
    }

    if(existingBranch) {
        for (let i = 0; i < historyIds.length; i++) {
            const historyId: string = historyIds[i];
            try{
                deletedStockHistory = await BranchProductStockHistoryModel.deleteOne(historyId);
            }
            catch(error: any){
                throw new Error(`There was an error deleting Branch Product Stock History with ID ${historyId}`);
            }
    
            if (deletedStockHistory) {
                try {
                    await BranchProductStockModel.deleteOne(deletedStockHistory.branchProductStockId);
                }
                catch(error: any) {
                    throw new Error(`There was an error deleting Branch Product Stock with ID ${deletedStockHistory.branchProductStockId}`);
                }
                deletedStockHistories.push(deletedStockHistory);
            }
        }
        return deletedStockHistories;
    }

    throw new Error(`There exists no Branch with ID ${branchId}`);
}