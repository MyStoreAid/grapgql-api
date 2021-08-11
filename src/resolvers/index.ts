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
        internalBusinessCategories
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
        deleteInternalBusinessCategory
    }
};

export default resolvers;