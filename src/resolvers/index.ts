//------------------ Appointment -----------------
import { adminAppointment, adminAppointments } from './appointments/admin/queries';
import { adminCreateAppointment, adminUpdateAppointment, adminDeleteAppointment } from './appointments/admin/mutations';
//--------------- App Notifications --------------
import { adminAppNotification, adminAppNotifications } from './appNotifications/admin/queries';
import { adminCreateAppNotification, adminUpdateAppNotification, adminDeleteAppNotification } from './appNotifications/admin/mutations';
//--------------------- Audit --------------------
import { adminAudit, adminAudits, adminBranchAudits } from './audits/admin/queries';
import { createAudit, updateAudit, deleteAudit } from './audits/mutations';
//----------------- Audit Entries ----------------
import { adminAuditEntries } from './auditEntries/admin/queries';
//------------------- Branches -------------------
import { adminBranch, adminBranches } from './branches/admin/queries';
import { adminCreateBranch, adminUpdateBranch, adminDeleteBranch } from './branches/admin/mutations';
//----------------- Branch Customers -------------
import { adminBranchCustomers } from './branchCustomers/admin/queries';
//------------------- Branch Goals ---------------
import { adminBranchGoal, adminBranchGoals } from './branchGoals/admin/queries';
import { adminCreateBranchGoal, adminUpdateBranchGoal, adminDeleteBranchGoal } from './branchGoals/admin/mutations';
import { clientBranchGoals } from './branchGoals/client/queries';
//---------------  Branch Product ---------------
import { adminBranchProducts } from './branchesProducts/admin/queries';
import { adminAssignBranchProduct } from './branchesProducts/admin/mutations';
import { clientBranchProducts } from './branchesProducts/client/queries';
import { clientAssignBranchProduct, clientDeleteBranchProduct } from './branchesProducts/client/mutations';
//----------  Branch Product Category ------------
import { adminBranchProductCategories } from './branchProductCategories/admin/queries';
import { adminAssignBranchProductCategory } from './branchProductCategories/admin/mutations';
import { clientBranchProductCategories } from './branchProductCategories/client/queries';
import { clientAssignBranchProductCategory, clientDeleteBranchProductCategory } from './branchProductCategories/client/mutations';
// -----------------  Branch Supplier -------------
import { adminBranchSuppliers } from './branchSuppliers/admin/queries';
import { createBranchSupplier } from './branchSuppliers/client/mutations';
//----------  Branch Supplier Salespersons -------
// import { clientFindBranchEmployees } from './branchSupplierSalespersons/client/queries';
import { clientCreateBranchSupplierSalesperson } from './branchSupplierSalespersons/client/mutations';
//---------------- Branch User Goals -------------
import { adminBranchUserGroup, adminBranchUserGroups } from './branchUserGroups/admin/queries';
import { adminCreateBranchUserGroup, adminUpdateBranchUserGroup, adminDeleteBranchUserGroup } from './branchUserGroups/admin/mutations';
//--------------------- Brands -------------------
import { adminBrand, adminBrands } from './brands/admin/queries';
import { adminCreateBrand, adminUpdateBrand, adminDeleteBrand } from './brands/admin/mutations';
//-------------- Business Category ---------------
import { adminBusinessCategory, adminBusinessCategories } from './businessCategories/admin/queries';
import { adminCreateBusinessCategory, adminUpdateBusinessCategory, adminDeleteBusinessCategory } from './businessCategories/admin/mutations';
import { clientBusinessCategories } from './businessCategories/client/queries';
//--------------- Cashflows ----------------------
import { adminBranchCashflows } from './cashflows/admin/queries';
import { adminUpdateBranchCashflow } from './cashflows/admin/mutations';
//------------ Client User Request ---------------
import { adminClientUserRequest, adminClientUserRequests } from './clientUserRequests/admin/queries';
import { adminCreateClientUserRequest, adminUpdateClientUserRequest, adminDeleteClientUserRequest } from './clientUserRequests/admin/mutations';
//------------------ Client ----------------------
import { client, clients } from './clients/queries';
import { createClient, updateClient, deleteClient } from './clients/mutations';
//------------------- Company --------------------
import { adminCompany, adminCompanies } from './companies/admin/queries';
import { adminCreateCompany, adminUpdateCompany, adminDeleteCompany } from './companies/admin/mutations';
import { clientCreateCompany } from './companies/client/mutation';
import { clientCompanies, clientCompanyBranches } from './companies/client/queries';
//------------------ Customer --------------------
import {adminCustomer, adminCustomers} from './customers/admin/queries';
import {adminCreateCustomer, adminUpdateCustomer, adminDeleteCustomer} from './customers/admin/mutations';
//----------------- Employee Type ----------------
import { adminEmployeeType, adminEmployeeTypes } from './employeeTypes/admin/queries';
import { adminCreateEmployeeType, adminUpdateEmployeeType, adminDeleteEmployeeType } from './employeeTypes/admin/mutations';
//------------------- Feature --------------------
import { adminFeature, adminFeatures } from './features/admin/queries';
import { adminCreateFeature, adminUpdateFeature, adminDeleteFeature } from './features/admin/mutations';
//---------------- Health Check ------------------
import { adminHealthCheck, adminHealthChecks } from './healthChecks/admin/queries';
import { adminCreateHealthCheck, adminUpdateHealthCheck, adminDeleteHealthCheck } from './healthChecks/admin/mutations';
//-----------Internal Business Category ----------
import { adminInternalBusinessCategory, adminInternalBusinessCategories} from './internalBusinessCategories/admin/queries';
import { adminCreateInternalBusinessCategory, adminUpdateInternalBusinessCategory, adminDeleteInternalBusinessCategory } from './internalBusinessCategories/admin/mutations';
//--------------- Manufactures --------------------
import { adminManufacturer, adminManufacturers } from './manufacturers/admin/queries';
import { adminCreateManufacturer, adminUpdateManufacturer, adminDeleteManufacturer } from './manufacturers/admin/mutations';
//--------------- Measurement Units ---------------
import { adminMeasurementUnit, adminMeasurementUnits } from './measurementUnits/admin/queries';
import { adminCreateMeasurementUnit, adminUpdateMeasurementUnit, adminDeleteMeasurementUnit } from './measurementUnits/admin/mutations';
//--------------- Payment History -----------------
import { adminPaymentHistories, adminPaymentHistory } from './paymentHistories/admin/queries';
import { adminCreatePaymentHistory, adminUpdatePaymentHistory, adminDeletePaymentHistory } from './paymentHistories/admin/mutations';
//--------------- Permissions ---------------------
import { adminPermission, adminPermissions } from './permissions/admin/queries';
import { adminCreatePermission, adminUpdatePermission, adminDeletePermission } from './permissions/admin/mutations';
import { clientAvailablePermissions } from './permissions/client/queries';
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
import { adminProductSegmentProductSegmentEntries, adminProductSegmentEntries, adminProductSegmentEntry } from './productSegmentEntries/admin/queries';
import { adminCreateProductSegmentEntry, adminUpdateProductSegmentEntry, adminDeleteProductSegmentEntry } from './productSegmentEntries/admin/mutations';
//------------------ Purchases --------------------
import { adminPurchases } from './purchases/admin/queries';
//------------------- Roles -----------------------
import { adminRole, adminRoles } from './roles/admin/queries';
import { adminCreateRole, adminUpdateRole, adminDeleteRole } from './roles/admin/mutations';
//--------------- Role Permission -----------------------
import { createRolePermission } from './rolesPermissions/mutations';
//-------------------- Subscriptions --------------
import { adminSubscription, adminSubscriptions } from './subscriptions/admin/queries';
import { adminCreateSubscription, adminUpdateSubscription, adminDeleteSubscription } from './subscriptions/admin/mutations';
//-------------------- Supplier -------------------
import { adminCreateSupplier } from './suppliers/admin/mutations';
import { clientCreateSupplierCompany, clientCreateSupplierSalesperson } from './suppliers/client/mutations';
//----------------------- Sales -------------------
import { createSale } from './sales/mutations';
//---------------------- Stock --------------------
import { adminRemoveStockDuplicates } from './stocks/admin/mutations';
//----------------------- User --------------------
import { adminUser, adminUsers, adminBranchCustomerCarePersonnel} from './users/admin/queries';
import { adminUpdateUser, adminDeleteUser } from './users/admin/mutations';
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
import { adminUserCompanyBranches, adminUserBranches, adminUserBranch, adminCustomerCarePersonnelCompanies } from './userBranches/admin/queries';
import { 
    adminAssignUserBranch, 
    adminRevokeEmployeeAccess, 
    adminUpdateUserBranch,
    adminSetMainCustomerCarePersonnel 
} from './userBranches/admin/mutations';
import { clientFindBranchEmployees, clientFindBranchPendingEmployees, clientUserCompanyBranches } from './userBranches/client/queries';
import { clientAssignBranchEmployee, clientDeleteBranch, clientDeleteBranchEmployee } from './userBranches/client/mutations';
//-------------------  User Company ----------------
import { adminUserCompany } from './userCompanies/admin/queries';
import { adminCreateUserCompany, adminUpdateUserCompany, adminDeleteUserCompany } from './userCompanies/admin/mutations';
//-------------------  Other Packages ---------------
import { DateTimeResolver, JSONObjectResolver } from 'graphql-scalars';

const resolvers = {
    DateTime: DateTimeResolver,
    JSONObject: JSONObjectResolver,

    Query: {
        //------------------ Appointment -----------------
        adminAppointment,
        adminAppointments,
        //--------------- App Notifications --------------
        adminAppNotification,
        adminAppNotifications,
        //--------------------- Audit --------------------
        adminAudit,
        adminAudits,
        adminBranchAudits,
        //----------------- Audit Entries ----------------
        adminAuditEntries,
        //------------------- Branches -------------------
        adminBranch,
        adminBranches,
        //----------------- Branch Customers -------------
        adminBranchCustomers,
        //------------------- Branch Goals ---------------
        adminBranchGoal,
        adminBranchGoals,
        clientBranchGoals,
        //---------------- Branch Category ----------------
        //---------------- Branch Product -----------------
        adminBranchProducts,
        clientBranchProducts,
        //----------- Branch Product Category -------------
        adminBranchProductCategories,
        clientBranchProductCategories,
        //---------------- Branch Supplier ----------------
        adminBranchSuppliers,
        //----------- Branch Supplier Salespersons --------
        // clientFindBranchEmployees,
        //---------------- Branch user Groups -------------
        adminBranchUserGroup,
        adminBranchUserGroups,
        //--------------------- Brands -------------------
        adminBrand,
        adminBrands,
        //-------------- Business Category ---------------
        adminBusinessCategory,
        adminBusinessCategories,
        clientBusinessCategories,
        //---------------- Cashflows ---------------------
        adminBranchCashflows,
        //----------- Client User Request ----------------
        adminClientUserRequest,
        adminClientUserRequests,
        //------------------ Client ----------------------
        client,
        clients,
        //------------------- Company --------------------
        adminCompany,
        adminCompanies,
        clientCompanies,
        clientCompanyBranches,
        //------------------ Customer --------------------
        adminCustomer,
        adminCustomers,
        //----------------- Employee Type ----------------
        adminEmployeeType,
        adminEmployeeTypes,
        //------------------- Feature --------------------
        adminFeature,
        adminFeatures,
        //---------------- Health Check ------------------
        adminHealthCheck,
        adminHealthChecks,
        //-----------Internal Business Category ----------
        adminInternalBusinessCategory,
        adminInternalBusinessCategories,
        //--------------- Manufactures --------------------
        adminManufacturer,
        adminManufacturers,
        //--------------- Measurement Units ---------------
        adminMeasurementUnit,
        adminMeasurementUnits,
        //--------------- Payment Histories ---------------
        adminPaymentHistory,
        adminPaymentHistories,
        //--------------- Permissions ---------------------
        adminPermission,
        adminPermissions,
        clientAvailablePermissions,
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
        adminProductSegmentProductSegmentEntries,
        adminProductSegmentEntries,
        adminProductSegmentEntry,
        //------------------ Purchases --------------------
        adminPurchases,
        //------------------- Roles -----------------------
        adminRole,
        adminRoles,
        //-------------------- Subscriptions --------------
        adminSubscription,
        adminSubscriptions,
        //-------------------- Users ----------------------
        adminBranchCustomerCarePersonnel,
        adminUser,
        adminUsers,
        //------------------ User Branch -------------------
        adminCustomerCarePersonnelCompanies,
        adminUserBranch,
        adminUserBranches,
        adminUserCompanyBranches,
        clientFindBranchEmployees,
        clientFindBranchPendingEmployees,
        clientUserCompanyBranches,
        //------------------ User Company ------------------
        adminUserCompany
    },

    Mutation: {
        //----------------- Appointments -----------------
        adminCreateAppointment,
        adminUpdateAppointment,
        adminDeleteAppointment,
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
        //------------------ Branch Product --------------
        adminAssignBranchProduct,
        clientAssignBranchProduct,
        clientDeleteBranchProduct,
        //---------------- Branch Product Category -------
        adminAssignBranchProductCategory,
        clientAssignBranchProductCategory,
        clientDeleteBranchProductCategory,
        //------------------- Branch Supplier ------------
        createBranchSupplier,
        //------------ Branch Supplier Salespersons ------
        clientCreateBranchSupplierSalesperson,
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
        //----------------- Cashflow ---------------------
        adminUpdateBranchCashflow,
        //------------ Client User Client ----------------
        adminCreateClientUserRequest,
        adminUpdateClientUserRequest,
        adminDeleteClientUserRequest,
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
        //---------------- Employee Type -----------------
        adminCreateEmployeeType,
        adminUpdateEmployeeType,
        adminDeleteEmployeeType,
        //------------------- Feature --------------------
        adminCreateFeature,
        adminUpdateFeature,
        adminDeleteFeature,
        //---------------- Health Checks -----------------
        adminCreateHealthCheck,
        adminUpdateHealthCheck,
        adminDeleteHealthCheck,
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
        //--------------- Payment Histories ---------------
        adminCreatePaymentHistory,
        adminUpdatePaymentHistory,
        adminDeletePaymentHistory,
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
        createRolePermission,
        //----------------------- Sale --------------------
        createSale,
        //---------------------- Stock ---------------------
        adminRemoveStockDuplicates,
        //-------------------- Subscriptions --------------
        adminCreateSubscription,
        adminUpdateSubscription,
        adminDeleteSubscription,
        //-------------------- Supplier -------------------
        adminCreateSupplier,
        clientCreateSupplierCompany,
        clientCreateSupplierSalesperson,
        //----------------------- User --------------------
        adminUpdateUser,
        adminDeleteUser,
        clientRefreshToken,
        clientRegisterUser,
        clientResendOtp,
        clientSetUserPassword,
        clientLoginUser,
        clientUpdateUser,
        clientUserExists,
        clientVerifyUser,
        //-------------------- User Branch ------------------
        adminAssignUserBranch,
        adminRevokeEmployeeAccess,
        adminSetMainCustomerCarePersonnel,
        adminUpdateUserBranch,
        clientAssignBranchEmployee,
        clientDeleteBranch,
        clientDeleteBranchEmployee,
        //-------------------- User Company -----------------
        adminCreateUserCompany,
        adminUpdateUserCompany,
        adminDeleteUserCompany
    },
};

export default resolvers;
