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



const resolvers = {
    Query: {
        //Brands
        brands,
        brand,

        //Business Category
        businessCategory,
        businessCategories,

        //Internal Business Category
        internalBusinessCategory,
        internalBusinessCategories,

        //Manufactures
        manufacturer,
        manufacturers,

        //Roles
        role,
        roles,

        //Permissions
        permission,
        permissions,
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
    }
};

export default resolvers;