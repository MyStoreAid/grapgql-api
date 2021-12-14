import { UserBranch as UserBranchModel, Branch as BranchModel } from "@mystoreaid/prisma-models";
import { UserBranch, UpdateUserBranchArgs } from "resolvers/userBranches/types";
import { Branch } from "../../../branches/types";

export default async function updateBranch(parent: any, args: UpdateUserBranchArgs): Promise<Branch> | never {
    const branchId: string = args.branchId;
    const userId: string = args.userId;
    const companyId: string = args.companyId;
    const branchInfo: any = args.branchInfo;
    const message: string = `User Branch with User ID ${userId}, Branch ID ${branchId} and Company ID ${companyId}`;
    let existingUserBranch: UserBranch;

    try {
        const condition = { AND: [ { userId: userId },  { companyId: companyId }, { branchId: branchId } ] };
        existingUserBranch = await UserBranchModel.findOneWhere(condition);
    }
    catch(error: any){
        throw new Error(`There was an error finding ${message}`);
    }
    
    if(existingUserBranch){
        _setLatLangFromGPSObject(branchInfo);
        try{
            const updatedBranch: Branch = await BranchModel.updateOne(branchId, branchInfo);
            return updatedBranch;
        }
        catch(error: any) {
            throw new Error(`There was an error updating Branch with Branch ${branchId}`);
        }
    }
    else {
        throw new Error(`There exists no ${message}`);
    }
}

function _setLatLangFromGPSObject(resource: any = {}) {
    if (typeof resource.gps === 'object') {
      if (resource.gps.lat) {
        resource.latitude = resource.gps.lat;
      }
      if (resource.gps.lng) {
        resource.longitude = resource.gps.lng;
      }
    }
  }