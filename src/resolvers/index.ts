//App Notifications
import { appNotification, appNotifications } from './appNotifications/queries';
import { createAppNotification, updateAppNotification, deleteAppNotification } from './appNotifications/mutations';

//Audit
import { audit, audits } from './audits/queries';
import { createAudit, updateAudit, deleteAudit } from './audits/mutations';

//Branch
import { branch, branches } from './branches/queries';
import { createBranch, updateBranch, deleteBranch } from './branches/mutations';

//Branch Goals
import { branchGoal, branchGoals } from './branchGoals/queries';
import { createBranchGoal, updateBranchGoal, deleteBranchGoal } from './branchGoals/mutations';

//Branch User Groups
import { branchUserGroup, branchUserGroups } from './branchUserGroups/queries';
import { createBranchUserGroup, updateBranchUserGroup, deleteBranchUserGroup } from './branchUserGroups/mutations';

//Brands
import { brand, brands } from './brands/queries';
import { createBrand, updateBrand, deleteBrand } from './brands/mutations';

// Business Category
import { businessCategory, businessCategories } from './businessCategories/queries';
import { createBusinessCategory, updateBusinessCategory, deleteBusinessCategory } from './businessCategories/mutations';

//Client
import { client, clients } from './clients/queries';
import { createClient, updateClient, deleteClient } from './clients/mutations';

//Company
import { company, companies } from './companies/queries';
import { createCompany, updateCompany, deleteCompany } from './companies/mutations';

//Feature
import { feature, features } from './features/queries';
import { createFeature, updateFeature, deleteFeature } from './features/mutations';

//Internal Business Category
import { internalBusinessCategory, internalBusinessCategories} from './internalBusinessCategories/queries';
import { createInternalBusinessCategory, updateInternalBusinessCategory, deleteInternalBusinessCategory } from './internalBusinessCategories/mutations';

//Manufacturers
import { manufacturer, manufacturers } from './manufacturers/queries';
import { createManufacturer, updateManufacturer, deleteManufacturer } from './manufacturers/mutations';

//Measurement Units
import { measurementUnit, measurementUnits } from './measurementUnits/queries';
import { createMeasurementUnit, updateMeasurementUnit, deleteMeasurementUnit } from './measurementUnits/mutations';

//Permissions
import { permission, permissions } from './permissions/queries';
import { createPermission, updatePermission, deletePermission } from './permissions/mutations';


//Product Categories
import { productCategory, productCategories } from './productCategories/queries';
import { createProductCategory, updateProductCategory, deleteProductCategory } from './productCategories/mutations';


//Product Descriptions
import { productDescription, productDescriptions } from './productDescriptions/queries';
import { createProductDescription, updateProductDescription, deleteProductDescription } from './productDescriptions/mutations';

//Product Segments
import { productSegment, productSegments  } from './productSegments/queries';
import { createProductSegment, updateProductSegment, deleteProductSegment } from './productSegments/mutations';

// Product Segment Entry
import { productSegmentEntry, productSegmentEntries } from './productSegmentEntries/queries';
import { createProductSegmentEntry, updateProductSegmentEntry, deleteProductSegmentEntry } from './productSegmentEntries/mutations';

//Roles
import { role, roles } from './roles/queries';
import { createRole, updateRole, deleteRole } from './roles/mutations';





const resolvers = {
    Query: {
        //App Notifications
        appNotification,
        appNotifications,

        //Audit
        audit,
        audits,

        //Branches
        branch,
        branches,
        
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

        //Company
        company,
        companies,

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

        //Product Segment
        productSegment,
        productSegments,

        //Product Segment Entry
        productSegmentEntry,
        productSegmentEntries,


        //Roles
        role,
        roles,
    },
  
    Mutation: {
        //App Notfications
        createAppNotification,
        updateAppNotification,
        deleteAppNotification,

        //Audit
        createAudit,
        updateAudit,
        deleteAudit,

        //Branch
        createBranch,
        updateBranch,
        deleteBranch,

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

        //Company
        createCompany,
        updateCompany,
        deleteCompany,
  
        
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

        //Product Segment
        createProductSegment,
        updateProductSegment,
        deleteProductSegment,

        //Product Segment Entry
        createProductSegmentEntry,
        updateProductSegmentEntry,
        deleteProductSegmentEntry,
 

        //Roles
        createRole,
        updateRole,
        deleteRole,
    }
};

export default resolvers;