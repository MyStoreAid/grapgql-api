//Brands
import brand from './brands/queries/brand';
import brands from './brands/queries/brands';
import createBrand from './brands/mutations/createBrand';
import deleteBrand from './brands/mutations/deleteBrand';
import updateBrand from './brands/mutations/updateBrand';

// Business Category
import businessCategory from './businessCategories/queries/businessCategory';
import businessCategories from './businessCategories/queries/businessCategories';
import createBusinessCategory from './businessCategories/mutations/createBusinessCategory';
import deleteBusinessCategory from './businessCategories/mutations/deleteBusinessCategory';
import updateBusinessCategory from './businessCategories/mutations/updateBusinessCategory';

//Branch Goals
import branchGoal from './branchGoals/queries/branchGoal';
import branchGoals from './branchGoals/queries/branchGoals';
import createBranchGoal from './branchGoals/mutations/createBranchGoal';
import deleteBranchGoal from './branchGoals/mutations/deleteBranchGoal';
import updateBranchGoal from './branchGoals/mutations/updateBranchGoal';
//Client
import client from './clients/queries/client';
import clients from './clients/queries/clients';
import createClient from './clients/mutations/createClient';
import deleteClient from './clients/mutations/deleteClient';
import updateClient from './clients/mutations/updateClient';

//Feature
import feature from './features/queries/feature';
import features from './features/queries/features';
import createFeature from './features/mutations/createFeature';
import deleteFeature from './features/mutations/deleteFeature';
import updateFeature from './features/mutations/updateFeature';

//Internal Business Category
import internalBusinessCategory from './internalBusinessCategories/queries/internalBusinessCategory';
import internalBusinessCategories from './internalBusinessCategories/queries/internalBusinessCategories';
import createInternalBusinessCategory from './internalBusinessCategories/mutations/createInternalBusinessCategory';
import deleteInternalBusinessCategory from './internalBusinessCategories/mutations/deleteInternalBusinessCategory';
import updateInternalBusinessCategory from './internalBusinessCategories/mutations/updateInternalBusinessCategory';

//Manufacturers
import manufacturer from './manufacturers/queries/manufacturer';
import manufacturers from './manufacturers/queries/manufacturers';
import createManufacturer from './manufacturers/mutations/createManufacturer';
import deleteManufacturer from './manufacturers/mutations/deleteManufacturer';
import updateManufacturer from './manufacturers/mutations/updateManufacturer';

//Permissions
import permission from './permissions/queries/permission';
import permissions from './permissions/queries/permissions';
import createPermission from './permissions/mutations/createPermission';
import deletePermission from './permissions/mutations/deletePermission';
import updatePermission from './permissions/mutations/updatePermission';

//Roles
import role from './roles/queries/role';
import roles from './roles/queries/roles';
import createRole from './roles/mutations/createRole';
import updateRole from './roles/mutations/updateRole';
import deleteRole from './roles/mutations/deleteRole';
//Measurement Units
import measurementUnit from './measurementUnits/queries/measurementUnit';
import measurementUnits from './measurementUnits/queries/measurementUnits';
import createMeasurementUnit from './measurementUnits/mutations/createMeasurementUnit';
import deleteMeasurementUnit from './measurementUnits/mutations/deleteMeasurementUnit';
import updateMeasurementUnit from './measurementUnits/mutations/updateMeasurementUnit';

//Product Descriptions
import productDescription from './productDescriptions/queries/productDescription';
import productDescriptions from './productDescriptions/queries/productDescriptions';
import createProductDescription from './productDescriptions/mutations/createProductDescription';
import deleteProductDescription from './productDescriptions/mutations/deleteProductDescription';
import updateProductDescription from './productDescriptions/mutations/updateProductDescription';




const resolvers = {
    Query: {
        //Brands
        brands,
        brand,

        //Business Category
        businessCategory,
        businessCategories,

        //Client
        client,
        clients,

        //Feature
        feature,
        features,

        //Internal Business Category
        internalBusinessCategory,
        internalBusinessCategories,
        
        //Branch Goals
        branchGoal,
        branchGoals,

        //Manufactures
        manufacturer,
        manufacturers,

        //Roles
        role,
        roles,

        //Permissions
        permission,
        permissions,
        
        //Measurement Units
        measurementUnit,
        measurementUnits,
        //Product Descriptions
        productDescription,
        productDescriptions
    },
  
    Mutation: {
        //Brands
        createBrand,
        updateBrand,
        deleteBrand,
        
        //Business Category
        createBusinessCategory,
        updateBusinessCategory,
        deleteBusinessCategory,
  
        //Internal Business Category
        createInternalBusinessCategory,
        updateInternalBusinessCategory,
        deleteInternalBusinessCategory,

        //Branch Goals
        createBranchGoal,
        updateBranchGoal,
        deleteBranchGoal,

        //Clients
        createClient,
        updateClient,
        deleteClient,

        //Feature
        createFeature,
        updateFeature,
        deleteFeature,

        //Manufacturers
        createManufacturer,
        updateManufacturer,
        deleteManufacturer,

        //Roles
        createRole,
        updateRole,
        deleteRole,

        //Permissions
        createPermission,
        updatePermission,
        deletePermission,

        //Measurement Units
        createMeasurementUnit,
        updateMeasurementUnit,
        deleteMeasurementUnit,

        //Product Description
        createProductDescription,
        updateProductDescription,
        deleteProductDescription
    }
};

export default resolvers;