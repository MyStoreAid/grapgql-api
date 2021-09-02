//--------------- App Notifications --------------
import { adminAppNotification, adminAppNotifications } from './appNotifications/admin/queries';
import { adminCreateAppNotification, adminUpdateAppNotification, adminDeleteAppNotification } from './appNotifications/admin/mutations';
//--------------------- Audit --------------------
import { adminAudit, adminAudits } from './audits/admin/queries';
import { createAudit, updateAudit, deleteAudit } from './audits/mutations';
//------------------- Branches -------------------
import { adminBranch, adminBranches } from './branches/admin/queries';
import { adminCreateBranch, adminUpdateBranch, adminDeleteBranch } from './branches/admin/mutations';
//------------------- Branch Goals ---------------
import { adminBranchGoal, adminBranchGoals } from './branchGoals/admin/queries';
import { adminCreateBranchGoal, adminUpdateBranchGoal, adminDeleteBranchGoal } from './branchGoals/admin/mutations';
// -----------------  Branch Supplier -------------
import { createBranchSupplier } from './branchSuppliers/mutations';
//----------  Branch Supplier Salespersons -------
import { clientFindBranchEmployees } from './branchSupplierSalespersons/client/queries';
import { createBranchSupplierSalesperson } from './branchSupplierSalespersons/mutations';
//---------------- Branch User Goals -------------
import { adminBranchUserGroup, adminBranchUserGroups } from './branchUserGroups/admin/queries';
import { adminCreateBranchUserGroup, adminUpdateBranchUserGroup, adminDeleteBranchUserGroup } from './branchUserGroups/admin/mutations';
//--------------------- Brands -------------------
import { adminBrand, adminBrands } from './brands/admin/queries';
import { adminCreateBrand, adminUpdateBrand, adminDeleteBrand } from './brands/admin/mutations';
//-------------- Business Category ---------------
import { adminBusinessCategory, adminBusinessCategories } from './businessCategories/admin/queries';
import { adminCreateBusinessCategory, adminUpdateBusinessCategory, adminDeleteBusinessCategory } from './businessCategories/admin/mutations';
//------------------ Client ----------------------
import { client, clients } from './clients/queries';
import { createClient, updateClient, deleteClient } from './clients/mutations';
//------------------- Company --------------------
import { adminCompany, adminCompanies } from './companies/admin/queries';
import { adminCreateCompany, adminUpdateCompany, adminDeleteCompany } from './companies/admin/mutations';
import { clientCreateCompany } from './companies/client/mutation';
//------------------ Customer --------------------
import {adminCustomer, adminCustomers} from './customers/admin/queries';
import {adminCreateCustomer, adminUpdateCustomer, adminDeleteCustomer} from './customers/admin/mutations';
//------------------- Feature --------------------
import { adminFeature, adminFeatures } from './features/admin/queries';
import { adminCreateFeature, adminUpdateFeature, adminDeleteFeature } from './features/admin/mutations';
//-----------Internal Business Category ----------
import { adminInternalBusinessCategory, adminInternalBusinessCategories} from './internalBusinessCategories/admin/queries';
import { adminCreateInternalBusinessCategory, adminUpdateInternalBusinessCategory, adminDeleteInternalBusinessCategory } from './internalBusinessCategories/admin/mutations';
//--------------- Manufactures --------------------
import { adminManufacturer, adminManufacturers } from './manufacturers/admin/queries';
import { adminCreateManufacturer, adminUpdateManufacturer, adminDeleteManufacturer } from './manufacturers/admin/mutations';
//--------------- Measurement Units ---------------
import { adminMeasurementUnit, adminMeasurementUnits } from './measurementUnits/admin/queries';
import { adminCreateMeasurementUnit, adminUpdateMeasurementUnit, adminDeleteMeasurementUnit } from './measurementUnits/admin/mutations';
//--------------- Permissions ---------------------
import { adminPermission, adminPermissions } from './permissions/admin/queries';
import { adminCreatePermission, adminUpdatePermission, adminDeletePermission } from './permissions/admin/mutations';
//------------------ Products ---------------------
import { adminProduct, adminProducts } from './products/admin/queries';
import { adminCreateProduct, adminUpdateProduct, adminDeleteProduct } from './products/admin/mutations';
//--------------- Product Category ----------------
import { adminProductCategory, adminProductCategories } from './productCategories/admin/queries';
import { adminCreateProductCategory, adminUpdateProductCategory, adminDeleteProductCategory } from './productCategories/admin/mutations';
//------------- Product Descriptions --------------
import { adminProductDescription, adminProductDescriptions } from './productDescriptions/admin/queries';
import { adminCreateProductDescription, adminUpdateProductDescription, adminDeleteProductDescription } from './productDescriptions/admin/mutations';
//--------------- Product Segment -----------------
import { adminProductSegment, adminProductSegments  } from './productSegments/admin/queries';
import { adminCreateProductSegment, adminUpdateProductSegment, adminDeleteProductSegment } from './productSegments/admin/mutations';
//------------- Product Segment Entry -------------
import { adminProductSegmentEntry, adminProductSegmentEntries } from './productSegmentEntries/admin/queries';
import { adminCreateProductSegmentEntry, adminUpdateProductSegmentEntry, adminDeleteProductSegmentEntry } from './productSegmentEntries/admin/mutations';
//------------------- Roles -----------------------
import { adminRole, adminRoles } from './roles/admin/queries';
import { adminCreateRole, adminUpdateRole, adminDeleteRole } from './roles/admin/mutations';
//-------------------- Subscriptions --------------
import { adminSubscription, adminSubscriptions } from './subscriptions/admin/queries';
import { adminCreateSubscription, adminUpdateSubscription, adminDeleteSubscription } from './subscriptions/admin/mutations';
//-------------------- Supplier -------------------
import { adminCreateSupplier } from './suppliers/admin/mutations';
//----------------------- Sales -------------------
import { createSale } from './sales/mutations';
//----------------------- User --------------------
import { adminUser, adminUsers } from './users/admin/queries';
import {
    clientLoginUser,
    clientRefreshToken, 
    clientRegisterUser,
    clientResendOtp,
    clientSetUserPassword,
    clientUpdateUser,
    clientUserExists,
    clientVerifyUser
} from './users/client/mutations';
//-------------------  User Branch -----------------
import { clientFindBranchUsers } from './userBranches/client/queries';



const resolvers = {
    Query: {
        //--------------- App Notifications --------------
        adminAppNotification,
        adminAppNotifications,
        //--------------------- Audit --------------------
        adminAudit,
        adminAudits,
        //------------------- Branches -------------------
        adminBranch,
        adminBranches,
        //------------------- Branch Goals ---------------
        adminBranchGoal,
        adminBranchGoals,
        //----------- Branch Supplier Salespersons --------
        clientFindBranchEmployees,
        //---------------- Branch user Goals -------------
        adminBranchUserGroup,
        adminBranchUserGroups,
        //--------------------- Brands -------------------
        adminBrand,
        adminBrands,
        //-------------- Business Category ---------------
        adminBusinessCategory,
        adminBusinessCategories,
        //------------------ Client ----------------------
        client,
        clients,
        //------------------- Company --------------------
        adminCompany,
        adminCompanies,
        //------------------ Customer --------------------
        adminCustomer,
        adminCustomers,
        //------------------- Feature --------------------
        adminFeature,
        adminFeatures,
        //-----------Internal Business Category ----------
        adminInternalBusinessCategory,
        adminInternalBusinessCategories,
        //--------------- Manufactures --------------------
        adminManufacturer,
        adminManufacturers,
        //--------------- Measurement Units ---------------
        adminMeasurementUnit,
        adminMeasurementUnits,
        //--------------- Permissions ---------------------
        adminPermission,
        adminPermissions,
        //------------------ Products ---------------------
        adminProduct,
        adminProducts,
        //--------------- Product Category ----------------
        adminProductCategory,
        adminProductCategories,
        //------------- Product Descriptions --------------
        adminProductDescription,
        adminProductDescriptions,
        //--------------- Product Segment -----------------
        adminProductSegment,
        adminProductSegments,
        //------------- Product Segment Entry -------------
        adminProductSegmentEntry,
        adminProductSegmentEntries,
        //------------------- Roles -----------------------
        adminRole,
        adminRoles,
        //-------------------- Subscriptions --------------
        adminSubscription,
        adminSubscriptions,
        //-------------------- Users ----------------------
        adminUser,
        adminUsers,
        //------------------ User Branch -------------------
        clientFindBranchUsers,
    },

    Mutation: {
        //--------------- App Notifications --------------
        adminCreateAppNotification,
        adminUpdateAppNotification,
        adminDeleteAppNotification,
        //--------------------- Audit --------------------
        createAudit,
        updateAudit,
        deleteAudit,
        //------------------- Branches -------------------
        adminCreateBranch,
        adminUpdateBranch,
        adminDeleteBranch,
        //------------------- Branch Goals ---------------
        adminCreateBranchGoal,
        adminUpdateBranchGoal,
        adminDeleteBranchGoal,
        //------------------- Branch Supplier ------------
        createBranchSupplier,
        //------------ Branch Supplier Salespersons ------
        createBranchSupplierSalesperson,
        //---------------- Branch User Goals -------------
        adminCreateBranchUserGroup,
        adminUpdateBranchUserGroup,
        adminDeleteBranchUserGroup,
        //--------------------- Brands -------------------
        adminCreateBrand,
        adminUpdateBrand,
        adminDeleteBrand,
        //-------------- Business Category ---------------
        adminCreateBusinessCategory,
        adminUpdateBusinessCategory,
        adminDeleteBusinessCategory,
        //------------------ Client ----------------------
        createClient,
        updateClient,
        deleteClient,
        //------------------- Company --------------------
        adminCreateCompany,
        adminUpdateCompany,
        adminDeleteCompany,
        clientCreateCompany,
        //------------------ Customer --------------------
        adminCreateCustomer,
        adminUpdateCustomer,
        adminDeleteCustomer,
        //------------------- Feature --------------------
        adminCreateFeature,
        adminUpdateFeature,
        adminDeleteFeature,
        //-----------Internal Business Category ----------
        adminCreateInternalBusinessCategory,
        adminUpdateInternalBusinessCategory,
        adminDeleteInternalBusinessCategory,
        //--------------- Manufactures --------------------
        adminCreateManufacturer,
        adminUpdateManufacturer,
        adminDeleteManufacturer,
        //--------------- Measurement Units ---------------
        adminCreateMeasurementUnit,
        adminUpdateMeasurementUnit,
        adminDeleteMeasurementUnit,
        //--------------- Permissions ---------------------
        adminCreatePermission,
        adminUpdatePermission,
        adminDeletePermission,
        //------------------ Products ---------------------
        adminCreateProduct,
        adminUpdateProduct,
        adminDeleteProduct,
        //--------------- Product Category ----------------
        adminCreateProductCategory,
        adminUpdateProductCategory,
        adminDeleteProductCategory,
        //------------- Product Descriptions --------------
        adminCreateProductDescription,
        adminUpdateProductDescription,
        adminDeleteProductDescription,
        //--------------- Product Segment -----------------
        adminCreateProductSegment,
        adminUpdateProductSegment,
        adminDeleteProductSegment,
        //------------- Product Segment Entry -------------
        adminCreateProductSegmentEntry,
        adminUpdateProductSegmentEntry,
        adminDeleteProductSegmentEntry,
        //------------------- Roles -----------------------
        adminCreateRole,
        adminUpdateRole,
        adminDeleteRole,
        //----------------------- Sale --------------------
        createSale,
        //-------------------- Subscriptions --------------
        adminCreateSubscription,
        adminUpdateSubscription,
        adminDeleteSubscription,
        //-------------------- Supplier -------------------
        adminCreateSupplier,
        //----------------------- User --------------------
        clientRefreshToken,
        clientRegisterUser,
        clientResendOtp,
        clientSetUserPassword,
        clientLoginUser,
        clientUpdateUser,
        clientUserExists,
        clientVerifyUser,
    },
};

export default resolvers;
