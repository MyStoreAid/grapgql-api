//Brands
import brand from './brands/queries/brand';
import brands from './brands/queries/brands';
import createBrand from './brands/mutations/createBrand';
import deleteBrand from './brands/mutations/deleteBrand';
import updateBrand from './brands/mutations/updateBrand';


//Internal Business Category
import internal_business_category from './internal_business_categories/queries/internal_business_category';
import internal_business_categories from './internal_business_categories/queries/internal_business_categories';
import createInternalBusinessCategory from './internal_business_categories/mutations/createInternalBusinessCategory';
import deleteInternalBusinessCategory from './internal_business_categories/mutations/deleteInternalBusinessCategory';
import updateInternalBusinessCategory from './internal_business_categories/mutations/updateInternalBusinessCategory';



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
        internal_business_category,
        internal_business_categories
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