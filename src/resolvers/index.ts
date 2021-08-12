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
      
        //Internal Business Category
        internalBusinessCategory,
        internalBusinessCategories,

        //Manufactures
        manufacturer,
        manufacturers,

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

        //Manufacturers
        createManufacturer,
        updateManufacturer,
        deleteManufacturer,

        createProductDescription,
        updateProductDescription,
        deleteProductDescription
    }
};

export default resolvers;