

//Branch Goals
import branchGoal from './branchGoals/queries/branchGoal';
import branchGoals from './branchGoals/queries/branchGoals';
import createBranchGoal from './branchGoals/mutations/createBranchGoal';
import deleteBranchGoal from './branchGoals/mutations/deleteBranchGoal';
import updateBranchGoal from './branchGoals/mutations/updateBranchGoal';

//Branch User Groups
import branchUserGroup from './branchUserGroups/queries/branchUserGroup';
import branchUserGroups from './branchUserGroups/queries/branchUserGroups';
import createBranchUserGroup from './branchUserGroups/mutations/createBranchUserGroup';
import deleteBranchUserGroup from './branchUserGroups/mutations/deleteBranchUserGroup';
import updateBranchUserGroup from './branchUserGroups/mutations/updateBranchUserGroup';

//Brands
import { brand, brands } from './brands/queries';
import { createBrand, updateBrand, deleteBrand } from './brands/mutations';

// Business Category
import businessCategory from './businessCategories/queries/businessCategory';
import businessCategories from './businessCategories/queries/businessCategories';
import createBusinessCategory from './businessCategories/mutations/createBusinessCategory';
import deleteBusinessCategory from './businessCategories/mutations/deleteBusinessCategory';
import updateBusinessCategory from './businessCategories/mutations/updateBusinessCategory';


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

//Measurement Units
import measurementUnit from './measurementUnits/queries/measurementUnit';
import measurementUnits from './measurementUnits/queries/measurementUnits';
import createMeasurementUnit from './measurementUnits/mutations/createMeasurementUnit';
import deleteMeasurementUnit from './measurementUnits/mutations/deleteMeasurementUnit';
import updateMeasurementUnit from './measurementUnits/mutations/updateMeasurementUnit';

//Permissions
import permission from './permissions/queries/permission';
import permissions from './permissions/queries/permissions';
import createPermission from './permissions/mutations/createPermission';
import deletePermission from './permissions/mutations/deletePermission';
import updatePermission from './permissions/mutations/updatePermission';


//Product Categories
import productCategory from './productCategories/queries/productCategory';
import productCategories from './productCategories/queries/productCategories';
import createProductCategory from './productCategories/mutations/createProductCategory';
import deleteProductCategory from './productCategories/mutations/deleteProductCategory';
import updateProductCategory from './productCategories/mutations/updateProductCategory';


//Product Descriptions
import productDescription from './productDescriptions/queries/productDescription';
import productDescriptions from './productDescriptions/queries/productDescriptions';
import createProductDescription from './productDescriptions/mutations/createProductDescription';
import deleteProductDescription from './productDescriptions/mutations/deleteProductDescription';
import updateProductDescription from './productDescriptions/mutations/updateProductDescription';

//Roles
import role from './roles/queries/role';
import roles from './roles/queries/roles';
import createRole from './roles/mutations/createRole';
import updateRole from './roles/mutations/updateRole';
import deleteRole from './roles/mutations/deleteRole';




const resolvers = {
    Query: {
        //Branch Goals
        branchGoal,
        branchGoals,

        //Branch user Goals
        branchUserGroup,
        branchUserGroups,


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
        
        
        //Manufactures
        manufacturer,
        manufacturers,

        //Measurement Units
        measurementUnit,
        measurementUnits,

        //Permissions
        permission,
        permissions,

        //Product Category,
        productCategory,
        productCategories,

        
        //Product Descriptions
        productDescription,
        productDescriptions,


        //Roles
        role,
        roles,
    },
  
    Mutation: {
        //Branch Goals
        createBranchGoal,
        updateBranchGoal,
        deleteBranchGoal,

        //Branch User Groups
        createBranchUserGroup,
        updateBranchUserGroup,
        deleteBranchUserGroup,

        //Brands
        createBrand,
        updateBrand,
        deleteBrand,
        
        //Business Category
        createBusinessCategory,
        updateBusinessCategory,
        deleteBusinessCategory,

        //Clients
        createClient,
        updateClient,
        deleteClient,
  
        
        //Feature
        createFeature,
        updateFeature,
        deleteFeature,

        //Internal Business Category
        createInternalBusinessCategory,
        updateInternalBusinessCategory,
        deleteInternalBusinessCategory,

        //Manufacturers
        createManufacturer,
        updateManufacturer,
        deleteManufacturer,

        //Measurement Units
        createMeasurementUnit,
        updateMeasurementUnit,
        deleteMeasurementUnit,

    
        //Permissions
        createPermission,
        updatePermission,
        deletePermission,


        //Product Category
        createProductCategory,
        updateProductCategory,
        deleteProductCategory,

        //Product Description
        createProductDescription,
        updateProductDescription,
        deleteProductDescription,
 

        //Roles
        createRole,
        updateRole,
        deleteRole,
    }
};

export default resolvers;