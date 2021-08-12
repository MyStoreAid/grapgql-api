//Brands
import brand from './brands/queries/brand';
import brands from './brands/queries/brands';
import createBrand from './brands/mutations/createBrand';
import deleteBrand from './brands/mutations/deleteBrand';
import updateBrand from './brands/mutations/updateBrand';


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




const resolvers = {
    Query: {
        //Brands
        brands,
        brand,

        //Manufactures
        manufacturer,
        manufacturers,

        //Internal Business Category
        internalBusinessCategory,
        internalBusinessCategories,

        //Permissions
        permission,
        permissions,
    },

    Mutation: {
        //Brands
        createBrand,
        updateBrand,
        deleteBrand,

        //Manufacturers
        createManufacturer,
        updateManufacturer,
        deleteManufacturer,

        //Internal Business Category
        createInternalBusinessCategory,
        updateInternalBusinessCategory,
        deleteInternalBusinessCategory,


        //Permissions
        createPermission,
        updatePermission,
        deletePermission,
    }
};

export default resolvers;